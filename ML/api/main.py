# Importing necessary libraries
import uvicorn
import pickle
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, UploadFile

# TenserFlow
from PIL import Image
import torch
import torch.nn as nn
import torchvision.transforms.functional as TF
import numpy as np
import pandas as pd

# Initializing the fast API server
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Defining class for Detection model
class CNN(nn.Module):
    def __init__(self, K):
        super(CNN, self).__init__()
        self.conv_layers = nn.Sequential(
            # conv1
            nn.Conv2d(in_channels=3, out_channels=32,
                      kernel_size=3, padding=1),
            nn.ReLU(),
            nn.BatchNorm2d(32),
            nn.Conv2d(in_channels=32, out_channels=32,
                      kernel_size=3, padding=1),
            nn.ReLU(),
            nn.BatchNorm2d(32),
            nn.MaxPool2d(2),
            # conv2
            nn.Conv2d(in_channels=32, out_channels=64,
                      kernel_size=3, padding=1),
            nn.ReLU(),
            nn.BatchNorm2d(64),
            nn.Conv2d(in_channels=64, out_channels=64,
                      kernel_size=3, padding=1),
            nn.ReLU(),
            nn.BatchNorm2d(64),
            nn.MaxPool2d(2),
            # conv3
            nn.Conv2d(in_channels=64, out_channels=128,
                      kernel_size=3, padding=1),
            nn.ReLU(),
            nn.BatchNorm2d(128),
            nn.Conv2d(in_channels=128, out_channels=128,
                      kernel_size=3, padding=1),
            nn.ReLU(),
            nn.BatchNorm2d(128),
            nn.MaxPool2d(2),
            # conv4
            nn.Conv2d(in_channels=128, out_channels=256,
                      kernel_size=3, padding=1),
            nn.ReLU(),
            nn.BatchNorm2d(256),
            nn.Conv2d(in_channels=256, out_channels=256,
                      kernel_size=3, padding=1),
            nn.ReLU(),
            nn.BatchNorm2d(256),
            nn.MaxPool2d(2),
        )

        self.dense_layers = nn.Sequential(
            nn.Dropout(0.4),
            nn.Linear(50176, 1024),
            nn.ReLU(),
            nn.Dropout(0.4),
            nn.Linear(1024, K),
        )

    def forward(self, X):
        out = self.conv_layers(X)

        # Flatten
        out = out.view(-1, 50176)

        # Fully connected
        out = self.dense_layers(out)

        return out


# Loading up the trained model
model = pickle.load(open('../Predicitve/model/pricePredictLatest.pkl', 'rb'))

# Detection Model
detect_model = CNN(39) 
detect_model.load_state_dict(torch.load("../Detection/model/crop_detect_model.pt"))
detect_model.eval()

# Recommendation Model

recommend_modal = pickle.load(open("../Recommendation/model/cropRecommenderLatest.pkl",'rb'))

# Disease and Supplements Mapping
disease_info = pd.read_csv("../Detection/model/disease_info.csv" , encoding='cp1252')
supplement_info = pd.read_csv("../Detection/model/supplement_info.csv",encoding='cp1252')


# Defining the model input types
class Product(BaseModel):
    Brand: int
    Category: int
    Used: int
    Working_Condition: int
    release_year: int
    days_use:int

# Defining th recommendation Modal input 
class Crop(BaseModel):
    nitrogen: int
    phosphorus: int
    potassium: int
    temp: float
    humidity: float
    pH:float
    rainfall:float

# Detection function
def prediction(image_path):
    #print(data)
    image = Image.open(image_path)
    image = image.resize((224, 224))
    input_data = TF.to_tensor(image)
    input_data = input_data.view((-1, 3, 224, 224))
    output = detect_model(input_data)
    output = output.detach().numpy()
    index = np.argmax(output)
    print(index)
    return index
 
#indexing
idx_to_classes = {0: 'Apple___Apple_scab',
                  1: 'Apple___Black_rot',
                  2: 'Apple___Cedar_apple_rust',
                  3: 'Apple___healthy',
                  4: 'Background_without_leaves',
                  5: 'Blueberry___healthy',
                  6: 'Cherry___Powdery_mildew',
                  7: 'Cherry___healthy',
                  8: 'Corn___Cercospora_leaf_spot Gray_leaf_spot',
                  9: 'Corn___Common_rust',
                  10: 'Corn___Northern_Leaf_Blight',
                  11: 'Corn___healthy',
                  12: 'Grape___Black_rot',
                  13: 'Grape___Esca_(Black_Measles)',
                  14: 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
                  15: 'Grape___healthy',
                  16: 'Orange___Haunglongbing_(Citrus_greening)',
                  17: 'Peach___Bacterial_spot',
                  18: 'Peach___healthy',
                  19: 'Pepper,_bell___Bacterial_spot',
                  20: 'Pepper,_bell___healthy',
                  21: 'Potato___Early_blight',
                  22: 'Potato___Late_blight',
                  23: 'Potato___healthy',
                  24: 'Raspberry___healthy',
                  25: 'Soybean___healthy',
                  26: 'Squash___Powdery_mildew',
                  27: 'Strawberry___Leaf_scorch',
                  28: 'Strawberry___healthy',
                  29: 'Tomato___Bacterial_spot',
                  30: 'Tomato___Early_blight',
                  31: 'Tomato___Late_blight',
                  32: 'Tomato___Leaf_Mold',
                  33: 'Tomato___Septoria_leaf_spot',
                  34: 'Tomato___Spider_mites Two-spotted_spider_mite',
                  35: 'Tomato___Target_Spot',
                  36: 'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
                  37: 'Tomato___Tomato_mosaic_virus',
                  38: 'Tomato___healthy'}

# Setting up the home route
@app.get("/")
def read_root():
    return {"data": "App running"}

# Setting up the prediction route
@app.post("/prediction/")
async def get_predict(data: Product):
    print(data)
    sample = [[
        data.Brand,
        data.Category,
        data.Used,
        data.Working_Condition,
        data.release_year,
        data.days_use
    ]]


    price = model.predict(sample).tolist()[0]

    return {
        "data":price
    }

# Detection Route
@app.post("/detect")
async def detection(file: UploadFile):
    file_location = f"files/{file.filename}"
    with open(file_location, "wb+") as file_object:
        file_object.write(file.file.read())

    detect = prediction(file_location)
    title = disease_info['disease_name'][detect]
    description =disease_info['description'][detect]
    prevent = disease_info['Possible Steps'][detect]
    image_url = disease_info['image_url'][detect]
    supplement_name = supplement_info['supplement name'][detect]
    supplement_image_url = supplement_info['supplement image'][detect]
    supplement_buy_link = supplement_info['buy link'][detect]
    return {
        "title":title,
        "description":description,
        "prevent":prevent,
        "image":image_url,
        "supplement":supplement_name,
        "supplement_image":supplement_image_url,
        "supplement_buy":supplement_buy_link
    }

# Recommendation Route
@app.post("/recommend")
async def get_predict(data: Crop):
    print(data)
    sample = [[
        data.nitrogen,
        data.phosphorus,
        data.potassium,
        data.temp,
        data.humidity,
        data.pH,
        data.rainfall
    ]]


    crop_name = recommend_modal.predict(sample).tolist()[0]

    return {
        "data":crop_name
    }



# Configuring the server host and port
if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')
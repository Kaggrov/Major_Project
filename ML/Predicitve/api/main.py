# Importing necessary libraries
import uvicorn
import pickle
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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

# Loading up the trained model
model = pickle.load(open('../model/pricePredict.pkl', 'rb'))

# Defining the model input types
class Product(BaseModel):
    Brand: int
    Category: int
    Used: int
    Working_Condition: int
    release_year: int
    days_use:int

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

# Configuring the server host and port
if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')

import pandas as pd;
import numpy as np;

dataset = pd.read_csv('PriceDataSet.csv')

dataset['Used'] = dataset.Used.replace(['yes','no'],[0,1])

dataset['Working_Condition'] = dataset.Working_Condition.replace([2,3,4,6,8,12],[20,40,50,70,80,100])

dataset['Category'] =  dataset.Category.replace(['Tractor','Soil','Planting','Fertilizer'],[1,2,3,4])

dataset['Brand'] = pd.factorize(dataset['Brand'])[0]

X = dataset.drop(['normalized_used_price','normalized_new_price'], axis=1)
y = dataset.normalized_used_price
y1 = dataset.normalized_new_price

# Splitting dataset into trainig and testing

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y,train_size=0.8,random_state=1)

# Fitting with random forest model

from sklearn.ensemble import RandomForestRegressor 

model=RandomForestRegressor(n_estimators=100)

model.fit(X_train,y_train)

# Prediction and testing

y_pred=model.predict(X_test)

# Report and Accuracy Score
from sklearn.metrics import mean_absolute_percentage_error

mean_absolute_percentage_error(y_test, y_pred) 
#MAPE = 0.077

#Testing

sample1 = np.array([[0,1,1,40,2020,127]])
model.predict(sample1)


# Model 2
X_train, X_test, y1_train, y1_test = train_test_split(X, y1,train_size=0.8,random_state=1)

model1 =RandomForestRegressor(n_estimators=100)

model1.fit(X_train,y1_train)
y1_pred = model1.predict(X_test)

mean_absolute_percentage_error(y1_test, y1_pred) 
#MAPE = 0.076

#Testing

sample1 = np.array([[0,1,1,40,2020,127]])
model1.predict(sample1)


# Saving model

import pickle

pickle.dump(model, open('pricePredict.pkl', 'wb'))

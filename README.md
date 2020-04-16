# **Yahoo Weather Report API**

This application uses Yahoo Weather API(2020) to get forecast/weather details as listed here on [Yahoo Weather API page](https://developer.yahoo.com/weather/documentation.html).

This project was bootstrapped with `create-react-app`(version 16.2.0) and deployed at heroku: https://limitless-retreat-30039.herokuapp.com/

# How to setup and run the application 

**Assumption:** This project assumes that the user already have Node + NPM/YARN installed.

**Required Environment Variables:**

`API_KEY` : API Key is needed to make all requests. Hence you need to login and generate the API key from [here](https://developer.yahoo.com/api/) and you need to register first.

You may use the API key directly in the code(not recommended).Moreover you can also setup environment specific `.env` file as described [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables) and then use the API.Dont forget to add the .`env` in `.gitignore` file too. 

Once the API_KEY is set, Lets get the code by firstly cloning the repo, installing the node packages and starting the server.


**Clone the repo:**

    git clone https://github.com/mike1011/react-redux-yahoo-weather-api-2020.git

**Install dependencies:**

    npm install
    
    `This will install reactjs, bootstrap and axios as major libraries used in this project`

**Starting the application in development mode:**

    npm start OR yarn start to see browser running at http://localhost:3000/


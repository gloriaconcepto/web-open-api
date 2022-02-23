# A simple weather Forcast App

##
[Demo](https://weather-data-forcast.firebaseapp.com/)

## Technologies
- React.js
- boostrap
- html
- javascript
- Restful Api
- openweathermap api
### Design Architecture
  ![alt text](https://github.com/gloriaconcepto/web-open-api/blob/main/public/web-dashboard-architecture.png)

### How to run the app locally
- Please ensure that you have at least >14.0.0 node.js version running on your system

- clone the app or download it.
     - git clone https://github.com/gloriaconcepto/web-open-api.git

- create .env file // at the root of your project
  
  ![alt text](https://github.com/gloriaconcepto/web-open-api/blob/main/public/rootFiles.png)

- please ensure the enivronment variables are set
    
    - Got to [https://openweathermap.org/forecast16](https://openweathermap.org/forecast16) to get your API key,<em>please ensure that before you use api key you have to let the api key to activated which takes like 10-20 min </em> 

    - REACT_APP_WEATHER_KEY = "xxxx" // enter your weather key at the .env file

- npm init

- npm run start

### How to run the app for production

- npm run build
### Unit Test

- For unit testing

- npm run test

- if there is an issues especially with lower node versions pls run this command  "npm i -D --exact jest-watch-typeahead@0.6.5"  

### Possible Design
- Accessible design was not implemented
- No flux design was consider (No redux,react.context) to help prevent props drilling and no state management control
- No integration test was done with tools with like cypress etc,just simple user unit test



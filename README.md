# authsession-google-expo

This is a login with google boilerplate that I built to experiment with [Authsession](https://docs.expo.dev/versions/latest/sdk/auth-session/) in expo.

# Demo 
<p align="center">
<img width="500" alt="Screen Shot 2022-02-28 at 10 50 41 AM" src="https://user-images.githubusercontent.com/7035086/156015313-0ec088d6-6742-437a-84a8-dded545246f2.png">
<img width="500" alt="Screen Shot 2022-02-28 at 10 53 14 AM" src="https://user-images.githubusercontent.com/7035086/156015330-cee800a7-5315-4b84-abf1-8d76c58f5c14.png">
<img width="500" alt="Screen Shot 2022-02-28 at 10 53 26 AM" src="https://user-images.githubusercontent.com/7035086/156015334-6567d46a-668f-42ae-9935-33acc35a4e71.png">
</p>

# Installation and Usage
To use this application, you must create a Google app on the Google cloud platform. More information on this [here](https://docs.expo.dev/guides/authentication/#google).

## Installation 

Clone this project to a desired local folder. 

```
$ git clone https://github.com/fnyah/authsession-google-expo/
$ cd authsession-google-expo
```

Install project dependencies on expo app (from project root).

```
$ cd frontend-app/login
$ npm install
// run the expo app 
$ npm start 
```
Install project dependencies on express server (from project root). 

```
$ cd server
$ npm install
// run the server 
$ npm start
```

# Required Dependencies

# Expo app 
  * "@react-navigation/native": "^6.0.8",
  * "@react-navigation/stack": "^6.1.1",
  * "axios": "^0.26.0",
  * "expo": "~44.0.0",
  * "expo-auth-session": "^3.5.0",
  * "expo-random": "^12.1.2",
  * "expo-status-bar": "~1.2.0",
  * "expo-web-browser": "^10.1.1",
  * "react": "17.0.1",
  * "react-dom": "17.0.1",
  * "react-native": "0.64.3",
  * "react-native-gesture-handler": "^2.2.0",
  * "react-native-reanimated": "^2.4.1",
  * "react-native-safe-area-context": "^4.0.1",
  * "react-native-web": "0.17.1"

# Server
* [Axios](https://axios-http.com/docs/intro)
* [Cookie parser](https://github.com/expressjs/cookie-parser)
* [CORS](https://www.npmjs.com/package/cors)
* [Express](https://expressjs.com/)

# License

MIT ©  [fnyah](https://github.com/fnyah)





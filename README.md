# Welcome to CoderConnect
This social media site was designed with coders in mind. Creating a profile is free and easy; users showcase their best projects on their CoderConnect profile via a connection to their GitHub account. Users display a bio, which contains information on what area of programming interests them, the coding languages in which they are proficient, and any other relevant programmer info, such as how many times they had to console.log() `Hello World!` before they could get a job.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Components

This project is broken up into the components listed below. These React components all come together in the App.js file inside a function that correctly routes the user to the corresponding page.


### `Login/Sign Up Page`
A simple page to prompt the user to log in or create an account to use CoderConnect.


### `Home Feed`
This page displays what other CoderConnect users are posting. Users stay updated on what their connections are up to, new trends in tech, what companies have the best wfh policies, etc.


### `Profile Page`
This is where users can shine by listing their most impressive projects/apps they have built. They describe what draws them to tech, what sort of programming they do or are interested in, and what coding languages they use. Putting a bio and listing skills, accomplishments, and major projects can result in employers reaching out to the users as well. This community is built on collaboration and innovation, as well as networking. The hope is to unite and inspire those who program for work and fun.



### `Navigation`
This navigation bar is listed just below the Browser Router component in the App function so that it will display at the top of the browser. A user interacts with it to toggle between the Login/Sign Up page, Home Feed, and Profile Page.



### `Error 404`
If the user types in anything but the correct route for the above components, an Error 404 message will display, complete with an HTTP cat image.



*** Coder Connect Installed Dependencies***
  - express
  - dotenv
  - mongoose
  - nodemon
  - bcryptjs

npm i express dotenv mongoose bcryptjs
npm i -D nodemon
npm install --save express-async-handler           // from https://github.com/Abazhenov/express-async-handler

***I manually updated the package.json to help me keep things separate (see below for snippet from package.json)

"scripts": {
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js",



    <terminal commands>
    npm start
    npm run server

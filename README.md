# MERN Auth Starter

*MERN Auth Starter* is a boilerplate project to provide JWT based authentication for Single Page applications. I found myself spending countless hours reading blog posts, authentication documentation, and watching tutorials with not much to show for it. The libraries and methodologies in this project aim to highlight what I found to be the best implementation I could come up with for providing basic user authentication for small to medium side projects.

## Technologies

For the **front end** I chose to use [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) as the foundation for the Front end along with [React Router](https://reactrouter.com/) for my routing needs. I'm using the [Context API](https://reactjs.org/docs/context.html) that comes with React to handle my Auth State management to keep things simple and light.

The **back end** consists of a [Node.js](https://nodejs.org/en/) server running [Express](https://expressjs.com/).

## Environment Variables

*required variables go here*

## How To Use

This project contains both the client code and the server code in one project. You can install all the dependencies needed for both of them by running `npm install` while in either directory.

The server requires a Mongo DB. I recommend creating a free tier [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)  if you would like to experiment with the project.

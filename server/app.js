const express = require("express");

const app = express();

const connectDB = require("./database/db");

require("dotenv").config();

const port = 3001;

const runServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

runServer();

import express from "express";

const app = express();

const port = 3001;

const runServer = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (error) {
    console.log("hello", error);
  }
};

runServer();

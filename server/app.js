import express from "express";

const app = express();

const start = async () => {
  try {
    await app.listen(5000, () => console.log(`Server start on port ${5000}`));
  } catch (e) {
    console.log(e);
  }
};

start();

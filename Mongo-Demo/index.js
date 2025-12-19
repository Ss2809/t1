const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Mongo-Demo")
  .then(() => {
    console.log("Mongodb DataBase Connet Succfully!!!");
  })
  .catch((err) => {
    console.log("Error Occuer...", err);
  });

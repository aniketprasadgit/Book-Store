const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);

const DB =
  "mongodb+srv://aniket:mongo1234@cluster0.af3q0.mongodb.net/BookStore?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(5000, () => {
      console.log("Server Connected on port 5000");
    });
  })
  .catch((err) => console.log(err));

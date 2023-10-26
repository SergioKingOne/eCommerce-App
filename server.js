const express = require("express");
const mongoose = require("mongoose");

const shopRoutes = require("./routes/shop");

const MONGODB_URI =
  "mongodb+srv://sergio:BExbGP7cIAKRqIzx@cluster0.58gxj67.mongodb.net/eCommerce";

const app = express();

app.use(shopRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.error(err.message));

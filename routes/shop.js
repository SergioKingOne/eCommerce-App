const express = require("express");

const { getIndex } = require("../controller/shop");

const Router = express.Router();

Router.get("/", getIndex);

module.exports = Router;

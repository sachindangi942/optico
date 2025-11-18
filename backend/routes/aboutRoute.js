const { getAbout } = require("../controllers/About");

const Router = require("express").Router();

Router.get("/",getAbout);

module.exports= Router;

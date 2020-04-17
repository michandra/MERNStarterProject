var express = require("express");
var authRouter = require("./auth");
var bookRouter = require("./book");
var surveyRouter = require("./survey");

var app = express();

app.use("/auth/", authRouter);
app.use("/book/", bookRouter);
app.use("/survey/", surveyRouter);

module.exports = app;
// const express = require('express');
import express from "express";
import configViewEngine  from "./configs/viewEngine";

const app = express();

const port = 3000;
configViewEngine(app);

app.get('/', function(req, res) {
    res.render('index.ejs');
})

app.listen(port, function() {
    console.log('App listening at http://localhost:' + port);
})
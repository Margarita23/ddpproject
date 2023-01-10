const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log("Server started ...");
});

app.get("/", (req, res) => {
    res.send("Hello From The Server");
});
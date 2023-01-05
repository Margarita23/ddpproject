const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

app.listen(3000, () => {
    console.log("Server started ...");
});

app.get("/", (req, res) => {
    res.send("Hello From The Server");
})
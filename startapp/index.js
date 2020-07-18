const mongoose = require("mongoose");
const express = require("express");
const app = express();

// Database 
const DATABASE = "mongodb://mymongo:27017/test"

mongoose.connect(DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("!-----DB CONNECTED-----!");
    })
    .catch(() => {
        console.log("!-----Error in DB connection-----!");
    })

app.get("/", (req, res) => {
    res.json({
        message: "Home Route"
    })
})

app.listen(8000, () => {
    console.log("App is listening at port: 8000");
})
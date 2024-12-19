require('dotenv')
const express = require('express');
const app = express();
const morgan = require('morgan');

app.set("view engine", "ejs");
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send("hello...")
});

app.listen('3000', console.log("server is running !"))
// const axios = require('axios');
// Base setup
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');


// storing express in app var
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// body-parser middleware
// body-parser 
app.use(bodyParser.urlencoded({ extended: false}));

// connection port
const PORT = process.env.PORT || 5000;

require("./routes/htmlRoutes")(app);


// app.use(express.static(__dirname + "/dist/html"));
app.use(express.static(__dirname + "/app/CSS"));
app.use(express.static(__dirname + "/app/js"));
app.use(express.static(__dirname + "/app/images"));


app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

// const axios = require('axios');
// Base setup
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');


// storing express in app var
const app = express();

// Passport config
require('./config/passport')(passport);

// DB Config
var db = process.env.MONGODB_URI || "mongodb+srv://mworth55:WORTHsilver55@users.r5pu6.mongodb.net/pokemonCards?retryWrites=true&w=majority";

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS Middleware
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// body-parser middleware
// body-parser 
app.use(bodyParser.urlencoded({ extended: false}));

// Bodyparser
app.use(express.urlencoded({ extended: false}));

// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  }));

// Connect flash
app.use(flash());

// connection port
const PORT = process.env.PORT || 5000;


// Global Vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
require("./routes/htmlRoutes")(app);
// require("./routes/users")(app)

// app.use(express.static(__dirname + "/dist/html"));
app.use(express.static(__dirname + "/app/CSS"));
app.use(express.static(__dirname + "/app/js"));
app.use(express.static(__dirname + "/app/images"));



app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));


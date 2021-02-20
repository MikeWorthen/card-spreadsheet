const path = require("path");
const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");
const User = require("../models/User");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../app/html/index.html"));
  });

  // app.get("/home", ensureAuthenticated, function (req, res) {
  //   res.sendFile(path.join(__dirname, "../app/html/authIndex.html"));
  //   console.log(req.user)
  // });

  // Card Sets Page
  app.get("/cardSets", function (req, res) {
    res.sendFile(path.join(__dirname, "../app/html/cardSets.html"));
  });

  // Guest User Spreadsheets
  app.get("/guestSearch", function (req, res) {
    res.sendFile(path.join(__dirname, "../app/html/cardSearch.html"));
  });

  // Test Page
  app.get("/test", function (req, res) {
    res.sendFile(path.join(__dirname, "../app/html/test.html"));
  });

    // Test2 Page
    app.get("/test2", function (req, res) {
      res.sendFile(path.join(__dirname, "../app/html/test2.html"));
    });
  
      // Test2 Page
    app.get("/cardLists", function (req, res) {
      res.sendFile(path.join(__dirname, "../app/html/cardLists.html"));
    });

  // app.get("/", ensureAuthenticated, (req, res) =>
  //   res.render("index", {
  //     user: req.user,
  //   })
  // );

};

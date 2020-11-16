const path = require('path');
const express = require('express');


// ===============================================================================
// ROUTING
// ===============================================================================


module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../app/html/index.html"));
    });
    app.get("/sheets", function(req, res) {
      res.sendFile(path.join(__dirname, "../app/html/spreadsheet.html"));
    });



    // dummy route
    app.get("/test", function(req, res) {
      res.sendFile(path.join(__dirname, "../app/html/cardSearch.html"));
    });
  };
  
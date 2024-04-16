// Create web server and API for comments
// Define routes for comments

// Imports
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

// Initialize express
const app = express();

// Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define route for GET /comments
app.get("/comments", (req, res) => {
  // Read file comments.json
  fs.readFile("comments.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
      return;
    }

    // Parse data
    const comments = JSON.parse(data);

    // Send response
    res.json(comments);
  });
});

// Define route for POST /comments
app.post("/comments", (req, res) => {
  // Read file comments.json
  fs.readFile("comments.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
      return;
    }

    // Parse data
    const comments = JSON.parse(data);

    // Add new comment
    comments.push(req.body);

    // Write file comments.json
    fs.writeFile("comments.json", JSON.stringify(comments), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal server error");
        return;
      }

      // Send response
      res.json(comments);
    });
  });
});

// Define route for DELETE /comments
app.delete("/comments", (req, res) => {
  // Write file comments.json
  fs.writeFile("comments.json", "[]", (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
      return;
    }

    // Send response
    res.json([]);
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
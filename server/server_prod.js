var express = require("express")
var path = require("path");
var config = require("../config/config.js")

//Initialize server instance
var Server = new express();

//setting server routing
Server.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname,"..", "public", "index.html"))
})

//Add Server Public Folder. Same location used for webpack-dev Server
Server.use(express.static(path.resolve(__dirname,"..", "public")));

Server.listen(config.SERVER_PORT, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", config.SERVER_PORT, config.SERVER_PORT)
  }
})

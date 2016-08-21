var express = require("express")
var webpack  = require("webpack")
var path  = require("path");
var dev_server = require("webpack-dev-server")

var webpack_config = require("./webpack.config.js")
var config = require("./config/config.js")

/** Development Server Setup
*/
if(config.NODE_ENV == "development"){
  webpack_config.entry.app.unshift("webpack-dev-server/client?http://localhost:"+config.SERVER_PORT+"/");
  var compiler = webpack(webpack_config);

  var server =new dev_server(compiler, {
    contentBase: path.resolve(__dirname, "public"),
    stats: {colors: true},
    noInfo: true,
    inline: true
  })
  server.listen(config.SERVER_PORT, "localhost", function(){
      console.info("==> 🌎 Dev Server Listening on port %s. Open up http://localhost:%s/ in your browser. For inline mode server open up http://localhost:%s/webpack-dev-server/index.html", config.SERVER_PORT, config.SERVER_PORT,  config.SERVER_PORT)
  });
}
/**
* Production server setup
*/

else{
  //Initialize server instance
  var Server = new express();

  //setting server routing
  Server.get("/", function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
  })

  //Add Server Public Folder. Same location used for webpack-dev Server
  Server.use(express.static('public'));

  Server.listen(config.SERVER_PORT, function(error) {
    if (error) {
      console.error(error)
    } else {
      console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", config.SERVER_PORT, config.SERVER_PORT)
    }
  })
}

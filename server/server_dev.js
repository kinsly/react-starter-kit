var webpack  = require("webpack")
var path  = require("path");
var dev_server = require("webpack-dev-server")

var webpack_config = require("./webpack.dev.js")
var config = require("../config/config.js")

webpack_config.entry.app.unshift("webpack-dev-server/client?http://localhost:"+config.SERVER_PORT+"/");
var compiler = webpack(webpack_config);

var server =new dev_server(compiler, {
  contentBase: path.resolve(__dirname,"..", "public"),
  stats: {colors: true},
  noInfo: true,
  inline: true,
  hot:false
})
server.listen(config.SERVER_PORT, "localhost", function(){
    console.info("==> 🌎 Dev Server Listening on port %s. Open up http://localhost:%s/ in your browser. For inline mode server open up http://localhost:%s/webpack-dev-server/index.html", config.SERVER_PORT, config.SERVER_PORT,  config.SERVER_PORT)
});

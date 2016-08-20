var webpack  = require("webpack")
var path  = require("path");
var dev_server = require("webpack-dev-server")
var webpack_config = require("./webpack.config.js")

webpack_config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
var compiler = webpack(webpack_config);

var server =new dev_server(compiler, {
  contentBase: path.resolve(__dirname, "public"),
  stats: {colors: true},
  noInfo: true,
  inline: true
})

server.listen(8080);

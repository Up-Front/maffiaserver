var path = require("path");

module.exports = {
  entry: {
    app: ["./client/src/app.js"]
  },
  devServer: { inline: true },
  output: {
    path: path.resolve(__dirname, "/"),
    publicPath: "/",
    filename: "bundle.js"
  }
};

var path = require("path");
module.exports = {
  entry: {
    app: ["./client/src/app.js"]
  },
  output: {
    filename: "client/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

var path = require("path");
module.exports = {
  context: __dirname + "/src/app",
  entry: "./app.ts",
  output: {
    path: __dirname + "/dist",
    filename: "app.bundle.js"
  },
  resolve: {
    extensions: [
      "",
      ".webpack.js", 
      ".web.js", 
      ".ts", 
      ".tsx", 
      ".js"
    ]
  },
  module: {
    loaders: [
      {
        test: /\.tsx$/,
        include: [
          path.resolve(__dirname, "src/app")
        ],
        loaders: [
          "ts-loader",
          "tslint-loader"
        ]
      }      
    ]
  }
};
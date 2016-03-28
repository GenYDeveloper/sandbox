var path = require("path");
module.exports = {
  entry: {
    app: [
      "./src/app/app.js"
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/public/",
    filename: "app.bundle.js"
  }
};
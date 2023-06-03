const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./js/script.js"),
    output: {
        path: path.resolve("dist"),
        filename: "bundle.js",
    },
};

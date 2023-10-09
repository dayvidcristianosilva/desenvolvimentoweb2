var fs = require("fs");
fs.readFile("potter.txt", "utf8", function (error, text) {
    if (error) {
        throw error;
    }
    console.log("Texto do Potter Ipsum:", text);
});
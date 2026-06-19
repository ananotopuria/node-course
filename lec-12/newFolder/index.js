
const fs = require("fs");
const path = require("path");

const messagePath = path.join(__dirname, "..", "message.txt");

fs.writeFileSync(messagePath, "Hello Node");

const text = fs.readFileSync(messagePath, "utf-8");
const reversed = text.split("").reverse().join("");

fs.writeFileSync(messagePath, reversed);

console.log("message.txt reversed");

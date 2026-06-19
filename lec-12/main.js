const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "newFolder");
const indexPath = path.join(folderPath, "index.js");

fs.mkdirSync(folderPath, { recursive: true });

const indexCode = `
const fs = require("fs");
const path = require("path");

const messagePath = path.join(__dirname, "..", "message.txt");

fs.writeFileSync(messagePath, "Hello Node");

const text = fs.readFileSync(messagePath, "utf-8");
const reversed = text.split("").reverse().join("");

fs.writeFileSync(messagePath, reversed);

console.log("message.txt reversed");
`;

fs.writeFileSync(indexPath, indexCode);

console.log("Folder and index.js created");

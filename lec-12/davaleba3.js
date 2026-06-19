const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "files");

fs.mkdirSync(folderPath, { recursive: true });

fs.writeFileSync(path.join(folderPath, "one.txt"), "Text one\n");
fs.writeFileSync(path.join(folderPath, "two.txt"), "Text two\n");
fs.writeFileSync(path.join(folderPath, "three.txt"), "Text three\n");

fs.writeFileSync(path.join(folderPath, "app.js"), "console.log('app')\n");
fs.writeFileSync(path.join(folderPath, "main.js"), "console.log('main')\n");
fs.writeFileSync(path.join(folderPath, "index.js"), "console.log('index')\n");

const files = fs.readdirSync(folderPath);

let allText = "";

files.forEach((file) => {
  if (path.extname(file) === ".txt" && file !== "all.txt") {
    const filePath = path.join(folderPath, file);
    const content = fs.readFileSync(filePath, "utf-8");
    allText += content;
  }
});

fs.writeFileSync(path.join(folderPath, "all.txt"), allText);

console.log("All txt files written in all.txt");

const fs = require("fs");
const path = require("path");

const items = ["folder1", "folder2", "file1.txt", "file2.txt", "file3.txt"];

items.forEach((item) => {
  if (item.includes(".")) {
    fs.writeFileSync(item, "Hello");
  } else {
    fs.mkdirSync(item, { recursive: true });
  }
});

items.forEach((item) => {
  const stats = fs.lstatSync(item);

  if (stats.isDirectory()) {
    fs.rmdirSync(item);
    console.log(`${item} deleted`);
  }
});

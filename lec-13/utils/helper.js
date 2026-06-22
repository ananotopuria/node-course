const fs = require("fs/promises");

async function read(filePath, parse = false) {
  const data = await fs.readFile(filePath, "utf-8");

  if (parse) {
    return JSON.parse(data);
  }

  return data;
}

async function write(filePath, data, stringify = false) {
  const finalData = stringify ? JSON.stringify(data, null, 2) : data;

  await fs.writeFile(filePath, finalData);
}

function sum(a, b) {
  return a + b;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

module.exports = {
  read,
  write,
  sum,
  reverseString,
};

const { read, write, sum, reverseString } = require("./utils/helper");

async function start() {
  await write("first.json", { name: "Giorgi", age: 25 }, true);
  await write("second.json", { city: "Tbilisi", active: true }, true);

  const firstData = await read("first.json", true);
  const secondData = await read("second.json", true);

  console.log(firstData);
  console.log(secondData);

  console.log(sum(10, 20));
  console.log(reverseString("hello"));
}

start();

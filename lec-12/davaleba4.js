const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/animals") {
    res.end(
      JSON.stringify([{ name: "Dog" }, { name: "Cat" }, { name: "Lion" }]),
    );
  } else if (req.url === "/cars") {
    res.end(
      JSON.stringify([
        { brand: "BMW" },
        { brand: "Mercedes" },
        { brand: "Toyota" },
      ]),
    );
  } else if (req.url === "/motorcycle") {
    res.end(
      JSON.stringify([
        { brand: "Yamaha" },
        { brand: "Honda" },
        { brand: "Kawasaki" },
      ]),
    );
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

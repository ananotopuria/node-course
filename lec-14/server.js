import http from "http";

const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Nika" },
  { id: 3, name: "Gio" },
  { id: 4, name: "Mariam" },
];

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
];

function paginate(data, page, take) {
  const start = (page - 1) * take;
  const end = start + take;
  return data.slice(start, end);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  res.setHeader("Content-Type", "application/json");
  const page = Number(url.searchParams.get("page")) || 1;
  const take = Number(url.searchParams.get("take")) || 2;
  const id = Number(url.searchParams.get("id"));
  const name = url.searchParams.get("name");

  if (url.pathname === "/") {
    res.end(JSON.stringify({ message: "Welcome to server" }));
  } else if (url.pathname === "/users") {
    let result = users;
    if (id) {
      result = result.filter((user) => user.id === id);
    }

    if (name) {
      result = result.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }

    result = paginate(result, page, take);

    res.end(JSON.stringify(result));
  } else if (url.pathname === "/posts") {
    let result = posts;

    if (id) {
      result = result.filter((post) => post.id === id);
    }

    result = paginate(result, page, take);

    res.end(JSON.stringify(result));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

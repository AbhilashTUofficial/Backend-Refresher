import http from "http";
import url from "url";

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;
  if (pathname === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        name: "Abhilash",
        age: 23,
      })
    );
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(`${PORT}`, () => console.log(`Server running on port ${PORT}`));

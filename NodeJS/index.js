import http from "http";
import url from "url";
import fs from "fs/promises";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const users = [
  {
    id: 1,
    name: "Abhilash",
  },
  {
    id: 2,
    name: "Aditya",
  },
  {
    id: 3,
    name: "Abhinav",
  },
  {
    id: 4,
    name: "Aditi",
  },
];

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

const jsonMiddleware = (req, res, next) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  next();
};

const getUsersHandler = (req, res) => {
  res.end(JSON.stringify(users));
};

const getUserHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id == id);
  res.end(JSON.stringify(user));
};

const notFoundHandler = (req, res) => {
  res.writeHead(404, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify({ error: "Not Found" }));
};

const addUserHandler = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const newUser = JSON.parse(parsedBody);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

const server = http.createServer(async (req, res) => {
  try {
    // let filePath;
    // if (req.method === "GET") {
    //   if (req.url === "/") {
    //     filePath = path.join(__dirname, "public", "index.html");
    //   } else if (req.url === "/about") {
    //     filePath = path.join(__dirname, "public", "about.html");
    //   }
    // } else {
    //   throw new Error("File Not Found");
    // }
    // const data = await fs.readFile(filePath);
    // res.setHeader("Content-Type", "text/html");
    // res.write(data);
    // res.end();

    logger(req, res, () => {
      jsonMiddleware(req, res, () => {
        switch (req.method) {
          case "GET":
            if (req.url === "/api/get-users" && req.method === "GET") {
              getUsersHandler(req, res);
            } else if (
              req.url.match(/\/api\/get-user\/([0-9]+)/) &&
              req.method === "GET"
            ) {
              getUserHandler(req, res);
            } else if (
              req.url.match(/\/api\/add-user/) &&
              req.method === "POST"
            ) {
              addUserHandler(req, res);
            } else {
              notFoundHandler(req, res);
            }
            break;
          case "POST":
            addUserHandler(req, res);
            break;
          default:
            notFoundHandler(req, res);
        }
      });
    });
  } catch (error) {
    res.writeHead(505, {
      "Content-Type": "text/html",
    });
    res.end(`<p>Page Not Found: ${error}</p>`);
  }
});

server.listen(`${PORT}`, () => console.log(`Server running on port ${PORT}`));

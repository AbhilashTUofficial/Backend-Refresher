// import fs from "fs";
import fs from "fs/promises";

// fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Async Callback", data);
// });

// const data = fs.readFileSync("file.txt", "utf8");
// console.log("Sync Callback", data);

// fs.readFile("./file.txt", "utf8")
//   .then((data) => {
//     console.log("Promise .then",data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const readFile = async () => {
  try {
    const data = await fs.readFile("./file.txt", "utf8");
    console.log("Promise .await", data);
  } catch (err) {
    console.log(err);
  }
};
readFile();

// fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// fs.writeFile("file.txt", "Hello World", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File written successfully");
// });

// fs.appendFile("file.txt", "Hello World", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File written successfully");
// });

// fs.unlink("file.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File deleted successfully");
// });

// fs.rename("file.txt", "file2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File renamed successfully");
// });

// fs.mkdir("folder", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Folder created successfully");
// });

// fs.rmdir("folder", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Folder deleted successfully");
// });

// fs.readdir("folder", (err, files) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(files);
// });

// fs.stat("file.txt", (err, stats) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(stats);
// });

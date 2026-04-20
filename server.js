console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const res = require("express/lib/response");

// 1 Starting code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Sessionn codelar uchun
// 3 Views code

app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "succes " });
});
app.get("/", function (req, res) {
  res.render("harid");
});
// app.get("/hello", function (req, res) {
//   res.end(`<h1> HELLO WORLD by Sam Developer</h1>`);
// });
// app.get("/gift", function (req, res) {
//   res.end(`Sovg'alar bulimiga xush kelibsiz`);
// });

const server = http.createServer(app);
let PORT = 491;
server.listen(PORT, function () {
  console.log(`The server running succesfully on port: ${PORT} `);
});

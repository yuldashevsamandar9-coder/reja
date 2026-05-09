const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://Samandar:zmEyysMwgqg2wYHM@reja.acvrsfg.mongodb.net/";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3007;
      server.listen(PORT, function () {
        console.log(
          `The server running succesfully on port:${PORT},  http://localhost:${PORT} `,
        );
      });
    }
  },
);

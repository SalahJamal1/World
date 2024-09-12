const app = require("./app");
const { Database } = require("./utils/Database");
const dotenv = require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`server is running ${port}`);
});
Database();
process.on("unhandledRejection", (err) => {
  console.log(`unhandledRejection :`, err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
process.on("uncaughtException", (err) => {
  console.log(`uncaughtException :`, err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
process.on("SIGTERM", (err) => {
  console.log(`SIGTERM :`, err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

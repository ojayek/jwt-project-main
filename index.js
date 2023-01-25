/** @format */

const http = require("http");
const consoles = require("console-emoji-log");
const app = require("./app");
const server = http.createServer(app);
require("emoji-log");
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

server.listen(port, () => {
  console.info(`Server running on port ${port}`);
  consoles.success("success"); // ✅ => success
  console.emoji("🦄", " 🔧  Welcome to my site     ✈    OJAYEK.github.io  ⚠");
});

// establishes a connection with the game server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541 // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log("you ded cuz you idled");
  });
  return conn;
};
console.log("Connecting ...");
connect();


module.exports = { connect };


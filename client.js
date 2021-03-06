// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constant");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541 // PORT number here,
    
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: BEN');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 50);
  });
 
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log('Server says: ', data);
  });

  return conn;
};
  
module.exports = { connect };


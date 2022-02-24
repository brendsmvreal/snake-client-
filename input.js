let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'W') {
    connection.write('Move: up');
  }
  if (key === 'A') {
    connection.write('Move: left');
  }
  if (key === 'S') {
    connection.write('Move: down');
  }
  if (key === 'D') {
    connection.write('Move: right');  
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput); 
  stdin.resume();
  return stdin;
};

module.exports = { setupInput };
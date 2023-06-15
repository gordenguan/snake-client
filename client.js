const net = require('net');
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.0.21',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Connecting ...");
    conn.on('data', () => {
      console.log('you ded cuz you idled');
    });
  });

  return conn;
};

module.exports = {connect};
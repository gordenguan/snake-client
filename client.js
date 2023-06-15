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
    console.log("Successfully connected to game server");
    conn.write('Name: NIC')
    // let moves = ['Move: up', 'Move: right', 'Move: up', 'Move: right'];
    // let delay = 100;
    // for (let move of moves) {
    //   setTimeout(() => {
    //     conn.write(move)  
    //   }, delay)
    //   delay += 250;
    // }
    // setInterval(() => {
    //   conn.write('Move: up')
    // }, 550)
    conn.on('data', () => {
      console.log('you ded cuz you idled')
    })
  })
  
  return conn;
};

module.exports = {connect};
const {UP, DOWN, LEFT, RIGHT} = require('./constants');

let connection;

//use process.stdin to receive client type data
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};
//terminate with ctrl + C
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  //keys to move snake with export const
  if (key === 'w') {
    connection.write(UP);
  }
  if (key === 'a') {
    connection.write(LEFT);
  }
  if (key === 's') {
    connection.write(DOWN);
  }
  if (key === 'd') {
    connection.write(RIGHT);
  }
  //key for banter
  if (key === 'j') {
    connection.write('Say: Hi');
  }
  if (key === 'k') {
    connection.write('Say: OK');
  }
  if (key === 'l') {
    connection.write('Say: GOGOGO');
  }
};

module.exports = {setupInput};
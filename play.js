const {connect} = require('./client');

connect();
//use process.stdin to receive client type data
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
};
//terminate with ctrl + C
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
}

setupInput();
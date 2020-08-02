/*
WARNING !!!
DO NOT TOUCH THIS FILE
*/

const main = require("./program");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  main(line);
});

#!/usr/bin/env node
// this above line is being written to direct the use of node interpreter to execute this file

const arg = require("arg");

try {
  const args = arg({
    // define the command line arguments that you except and their type
    "--start": Boolean,
    "--fun": String,
  });
  if (args["--start"]) console.log("Starting app");
} catch (error) {
  console.log(error.message);
  console.log();
  usage();
}

function usage() {
  // function that tells the user how to use the command line tool
  console.log(`tool [CMD]
    --start\tStarts the app
    --fun\tSome string input`);
}

#!/usr/bin/env node
// this above line is being written to direct the use of node interpreter to execute this file

import arg from "arg";
import chalk from "chalk";

try {
  const args = arg({
    // define the command line arguments that you except and their type
    "--start": Boolean,
    "--fun": String,
  });
  if (args["--start"]) console.log(chalk.bgCyanBright("Starting app"));
} catch (error) {
  console.log(chalk.yellow(error.message));
  console.log();
  usage();
}

function usage() {
  // function that tells the user how to use the command line tool
  console.log(`${chalk.whiteBright("tool [CMD]")}
    ${chalk.greenBright("--start")}\tStarts the app
    ${chalk.greenBright("--fun")}\tSome string input`);
}

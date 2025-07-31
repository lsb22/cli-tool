#!/usr/bin/env node
// this above line is being written to direct the use of node interpreter to execute this file

import arg from "arg";
import chalk from "chalk";
import start from "../src/commands/start.js";
import getConfig from "../src/config/config-mgr.js";

try {
  const args = arg({
    // define the command line arguments that you except and their type
    "--start": Boolean,
    "--fun": String,
  });
  if (args["--start"]) {
    async function findConfig() {
      const config = await getConfig();
      start(config);
    }
    findConfig();
  }
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

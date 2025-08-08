import chalk from "chalk";
import debug from "debug";

const logger = (name) => {
  return {
    log: (...args) => console.log(chalk.green(...args)),
    warning: (...args) => console.log(chalk.bgRed(...args)),
    highlight: (...args) => console.log(chalk.bgGreen(...args)),
    debug: debug(name),
  };
};

export default logger;

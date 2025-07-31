import chalk from "chalk";

const start = (config) => {
  console.log(chalk.bgGreen("Starting the app"));
  console.log(chalk.blue("Received configuration", JSON.stringify(config)));
};

export default start;

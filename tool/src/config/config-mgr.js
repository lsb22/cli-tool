import chalk from "chalk";
import { readFileSync } from "fs";
import { packageUp } from "package-up";

function getConfig() {
  return new Promise((resolve, reject) => {
    try {
      async function findConfig() {
        const path = await packageUp(); // fetches path of package.json
        const file = JSON.parse(readFileSync(path, "utf8")); // for fetching the file synchronously
        if (file.tool) {
          console.log(
            chalk.bgGreen("configuration found", JSON.stringify(file.tool))
          );
          resolve(file.tool);
        } else {
          console.log(
            chalk.bgRed("configuration not found, using default configuration")
          );
          resolve({ port: 3000 });
        }
      }
      findConfig();
    } catch (error) {
      reject(error.message);
    }
  });
}

export default getConfig;

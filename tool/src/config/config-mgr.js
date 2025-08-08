// import { readFileSync } from "fs";
// import { packageUp } from "package-up";
import Ajv from "ajv";
import schema from "./schema.js";
import logger from "../logger.js"; // logging service
import { cosmiconfigSync } from "cosmiconfig";
import betterAjvErrors from "better-ajv-errors";

function getConfig() {
  return new Promise((resolve, reject) => {
    try {
      async function findConfig() {
        // const path = await packageUp(); // fetches path of package.json
        // const file = JSON.parse(readFileSync(path, "utf8")); // for fetching the file synchronously
        const configLoader = cosmiconfigSync("tool");
        // creates an explorer to look for a property, like "tool" in package.json, if not found,
        // looks for files with extensions -> .toolrc (and .toolrc.json, .toolrc.yaml, etc.),
        // if not found then looks for files like tool.config.js or tool.config.cjs
        const result = configLoader.search(process.cwd());
        // tells the explorer to being search from current working directory
        // result will be stored in result.config
        const ajv = new Ajv(); // creates validator
        const validate = ajv.compile(schema);
        const log = logger("config:mgr");
        if (result) {
          const data = result.config.default;
          const isValid = validate(data); // validates data with the given schema
          if (!isValid) {
            const output = betterAjvErrors(schema, data, validate.errors);
            log.warning("Invalid configuration");
            console.log(output);
            process.exit(1);
          }
          log.debug("configuration found", JSON.stringify(data));
          // this will be shown only when the environment variable DEBUG=config:mgr or DEBUG=*
          resolve(data);
        } else {
          log.warning("configuration not found, using default configuration");
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

import logger from "../logger.js";

const log = logger("start");

const start = (config) => {
  log.highlight("Starting the app");
  log.debug("Received configuration", JSON.stringify(config));
  // this will be shown only when the environment variable DEBUG=start or DEBUG=*
};

export default start;

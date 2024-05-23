import app from "./app";
import logger from "./middlewares/logger.middleware";

(async () => {
  logger.info(`Attempting to run server on port 9871`);
  app.listen(9871, () => {
    logger.info(`Listening on port 9871`);
  });
})();
import Winston from "winston";

const { combine, timestamp, label, printf, prettyPrint } = Winston.format;
const CATEGORY = "winston custom format";

const logConfiguration = {
  level: "debug",
  format: combine(
    label({ label: CATEGORY }),
    timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),
    prettyPrint()
  ),
  transports: [
    new Winston.transports.Console(),
    new Winston.transports.File({
      filename: "./logs/logs.log",
    }),
    new Winston.transports.File({
      level: "error",
      filename: "./logs/error.log",
    }),
  ],
};

const logger = Winston.createLogger(logConfiguration);

export default logger;

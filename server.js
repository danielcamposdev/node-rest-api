//require("rootpath")();
import Express from "express";
import Cors from "cors";
import Helmet from "helmet";
import Morgan from "morgan";
import logger from "./src/_helpers/logger.js";
import * as db from "./src/_helpers/db.js";
import { errorHandler } from "./src/_middleware/error-handler.js";

const app = Express();
//const cookieParser = require("cookie-parser");
//const cors = require("cors");

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(Express.json());
app.use(Cors());
app.use(Helmet());
app.use(Morgan("combined"));

console.log(logger.info("my first log"));
//app.use(cookieParser());

// // allow cors requests from any origin and with credentials
// app.use(
//   cors({
//     origin: (origin, callback) => callback(null, true),
//     credentials: true,
//   })
// );

// api routes
// app.use("/users", require("./users/users.controller"));

// // swagger docs route
// app.use("/api-docs", require("_helpers/swagger"));

// global error handler
app.use(errorHandler);

// start server
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
app.listen(port, () => {
  console.log("Server listening on port " + port);
});

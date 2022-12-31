import { config } from "../../config.js";
import Mongoose from "mongoose";
import UserModel from "../../user/user.model.js";
//import { createTestUser } from "./create-test-user.js";

async function connect() {
  try {
    await Mongoose.connect(process.env.MONGODB_URI || config.connectionString);
    //createTestUser();
  } catch (error) {
    console.log(error);
  }
}

function isValidId(id) {
  return Mongoose.Types.ObjectId.isValid(id);
}

export {
  connect,
  UserModel,
  //RefreshToken: require("user/refresh-token.model"),
  isValidId,
};

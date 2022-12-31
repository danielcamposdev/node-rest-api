//const bcrypt = require('bcryptjs');
import * as db from "./db.js";
import role from "./role.js";

export async function createTestUser() {
  // create test user if the db is empty
  if ((await db.UserModel.countDocuments({})) === 0) {
    const user = new db.User({
      firstName: "Test",
      lastName: "User",
      username: "test",
      //passwordHash: bcrypt.hashSync('test', 10),
      passwordHash: "ajdshfajksdhfkd",
      role: role.Admin,
    });
    await user.save();
  }
}

import Mongoose from "mongoose";

const schemaObject = {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  role: { type: String, required: true },
};

const schema = new Mongoose.Schema(schemaObject);

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    // remove these props when object is serialized
    delete ret._id;
    delete ret.passwordHash;
  },
});

const UserModel = Mongoose.model("User", schema);

export default UserModel;

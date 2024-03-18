import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    externalId: String,
    name: String,
  },
  {
    collection: "static-accounts",
  },
);

export default mongoose.model("Account", accountSchema);

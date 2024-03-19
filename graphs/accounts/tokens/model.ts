import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    externalId: String,
    token: String,
  },
  {
    collection: "tokens-accounts",
  },
);

export default mongoose.model("TokenAccount", accountSchema);

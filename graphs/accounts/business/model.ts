import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    externalId: String,
    businessId: String,
  },
  {
    collection: "business-accounts",
  },
);

export default mongoose.model("BusinessAccount", accountSchema);

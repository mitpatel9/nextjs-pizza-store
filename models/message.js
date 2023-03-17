import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
   
  },
  message: {
    type: String
  },


}, {timestamps:true});

export default mongoose.models.Message || mongoose.model("Message" , MessageSchema);

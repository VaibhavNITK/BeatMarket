import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bio:{
    type: String,
  },
  password: {
    required: true,
    type: String,
    select: false,
  },
  insta_link:{
    type: String,
  },
  fb_link:{
    type: String,
  },
  twitter_link:{
    type: String,
  },
  album:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Song'
  },
  image:{
    type:String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Producer = mongoose.model("Producer", schema);
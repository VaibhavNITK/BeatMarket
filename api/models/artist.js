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
  purchased_songs:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Song'
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Artist = mongoose.model("Artist", schema);
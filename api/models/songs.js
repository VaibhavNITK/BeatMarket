import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price:{
    type:Number,
    required: true,
  },
  producer_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producer",
  },
  buyers:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
  }],
  song:{
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Song = mongoose.model("Song", schema);
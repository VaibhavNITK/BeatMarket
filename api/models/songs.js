import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  album_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album',
  },
  // Uncomment the following lines if you want to include the 'price' field
  // price: {
  //   type: Number,
  //   required: true,
  // },
  song: {
    type: String,
  },
  like: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Song = mongoose.model("Song", schema);

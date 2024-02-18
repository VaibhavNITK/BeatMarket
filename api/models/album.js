import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  artist_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
  },
  songs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song',
  }],
  buyers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
  }],
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  like: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Album = mongoose.model("Album", schema);

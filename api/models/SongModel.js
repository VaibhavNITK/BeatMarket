const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  album_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album',
  },
  price: {
    type: Number,
  },
  genre: {
    type: String,
  },
  likes: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Song = mongoose.model("Song", songSchema);
module.exports = Song;

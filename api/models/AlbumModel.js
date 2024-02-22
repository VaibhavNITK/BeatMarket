const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
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
  likes: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;

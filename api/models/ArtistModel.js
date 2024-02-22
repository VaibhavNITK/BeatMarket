const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true, 
  },
  bio: {
    type: String,
  },
  insta_link: {
    type: String,
  },
  fb_link: {
    type: String,
  },
  twitter_link: {
    type: String,
  },
  albumName:{
    type:String,
  },
  image: {
    type: String,
  },
  album: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



const Artist = mongoose.model("Artist", artistSchema);
module.exports = Artist;

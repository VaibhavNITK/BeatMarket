import mongoose from "mongoose";

const schema = new mongoose.Schema({
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
    required: true, // This line was missing
    select: false,
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
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song',
  },
  albumName:{
    type:String,
  },
  image: {
    type: String,
  },
  
  like: {
    type: Number,
  },
  purchased_albums: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Artist = mongoose.model("Artist", schema);

const asyncHandler = require("express-async-handler");
const Artist = require("../models/ArtistModel");
const generateToken = require("../config/generateToken");

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  const artistExist = await Artist.findOne({ email });

  if (artistExist) {
    res.status(400);
    throw new Error("User already exist");
  }

  const artist = await Artist.create({
    name,
    email,
    password,
  });

  if (artist) {
    res.status(201).json({
      _id: artist._id,
      name: artist.name,
      email: artist.email,
      token: generateToken(artist._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create new user");
  }
});


const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const artist = await Artist.findOne({ email });

  if (artist && artist.password === password) {
    res.status(201).json({
      _id: artist._id,
      name: artist.name,
      email: artist.email,
      token: generateToken(artist._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});



const updateBio = asyncHandler(async(req,res)=>{
  try{ 
    const { bio } = req.body;
    const artist = await Artist.findById(req.artist._id);

    artist.bio = bio;

    await artist.save();

    res.status(200).json({
      sucess:true,
      message:"Artist bio updated successfully",
    })
  }
  catch(err){
    console.log(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});

module.exports = { register, login, updateBio };












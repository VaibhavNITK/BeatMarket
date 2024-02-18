import { Artist } from "../models/artist.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";


export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
 
    const artist = await Artist.findOne({ email }).select("+password");

    if (!artist) return next(new ErrorHandler("Invalid Email or Password", 400));

    const isMatch = await bcrypt.compare(password, artist.password);

    if (!isMatch)
      return next(new ErrorHandler("Invalid Email or Password", 400));

    sendCookie(artist, req,res, `Welcome back, ${artist.name}`, 200);
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res,next) => {
  
  try {
    const { name, email, password } = req.body;

    let artist = await Artist.findOne({ email });

    if (artist) return next(new ErrorHandler("Artist Already Exist", 400));

    const hashedPassword = await bcrypt.hash(password, 10);

    artist = await Artist.create({ name, email, password: hashedPassword });

    sendCookie(artist, req,res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
    
  }
};

export const addBio= async(req,res,next)=>{
  try{ 
    const {bio}=req.body;
    let artist=await Artist.findById(req.artist._id)

    artist.bio=bio

    await artist.save()
    res.status(200).json({
      sucess:true,
      message:"artist updated",
    })

  }
  catch(error){
    next(error)
  }
}

export const getProfile= async(req,res,next)=>{
  try{
    const id= req.params.id;
    const data= await Artist.findById(id)
    if(!data) return next(new ErrorHandler("Artist doesn't Exist",400))
    res.status(200).json({
      success:true,
      result: data,
    })
  }
  catch(err){
    next(err)
  }
}

export const getAll = async (req, res, next) => {
  try {
    const artists = await Artist.find({ _id: { $ne: req.artist._id } });
    
    if (!artists || artists.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No other artists found",
      });
    }

    res.status(200).json({
      success: true,
      result: artists,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};





export const getMyProfile = (req, res) => {
  res.status(200).json({
    success: true,
    artist: req.artist,
  });
};


export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Develpoment" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Develpoment" ? false : true,
    })
    .json({
      success: true,
      message:"logged out successfully",
    });
};

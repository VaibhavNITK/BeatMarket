import { Artist } from "../models/artist.js";
// import { Producer } from "../models/producer.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(404).json({
      success: false,
      message: "Login First",
    });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.artist = await Artist.findById(decoded._id);
  console.log(req.artist)
  // if(!req.artist){
  //   req.producer=await Producer.findById(decoded._id);
 
  // }
  next();
}; 
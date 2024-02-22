import { Songs } from "../models/songs.js";
import ErrorHandler from "../middlewares/error.js";

export const getAll= async(req,res,next)=>{
  try{
    const id= req.params.id;
    const data= await Songs.findById(album_id=id)
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









import {app} from "./app.js";
import express from "express";
import { connectDB } from "./data/database.js"; 


connectDB(); 


// Start the server
app.listen(4000, () => {
  console.log("Server is listening on port 4000"); 
});
 
// import {app} from "./app.js";
import express from "express";
import { connectDB } from "./data/database.js"; 

const app = express();

connectDB(); 


app.get('/', (req, res) => {
  console.log(req.method); 
  res.send(`Hello World! The request method is ${req.method}`); 
});

// Start the server
app.listen(4000, () => {
  console.log("Server is listening on port 4000"); 
});
 
import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect("mongodb+srv://vaibagar:vaibagar@cluster0.grqe6ec.mongodb.net/?retryWrites=true&w=majority", {
      dbName: "beatmarket",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
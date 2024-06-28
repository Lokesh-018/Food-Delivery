import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://Lokesh-018:Lokesh123@cluster0.5u45h8c.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}
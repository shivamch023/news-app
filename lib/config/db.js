import mongoose from "mongoose";

 export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://shivamblogapp:shivamblog12345@cluster0.xcrw1vk.mongodb.net/blog-app')
    console.log("DB Connected")
}
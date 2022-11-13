import cors from 'cors';
import express from "express";
import mongoose from 'mongoose';


const PORT = 4000;
const app = express();
app.use(cors);

await mongoose.connect("mongodb+srv://akshay:akshay123@mern-stack.tm8ozvy.mongodb.net/?retryWrites=true&w=majority");

console.log("MongoDB connection is successfull")


app.get('/', (req, res) => {
    res.send("hello akshay")
})

app.listen(PORT, () => {
    console.log("server is running at http://localhost:4000")
})
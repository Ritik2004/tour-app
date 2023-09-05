import express from "express";
import dotenv from 'dotenv';
import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser";
import userRouter from "./routes/user.js"

import { Connection } from "./data/db.js"

const port = 5000;

const app = express();

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())
app.use(morgan("dev"));


//signup api
app.use("/users", userRouter);

Connection();

app.get("/", (req,res)=>{
    res.send("Hello")
})

app.listen(port, ()=>{
    console.log('server running')
})
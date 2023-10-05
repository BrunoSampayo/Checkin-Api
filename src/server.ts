import "express-async-errors"
import express, { Response, Request, NextFunction, ErrorRequestHandler } from 'express';
import dotenv from 'dotenv'
import { router } from './routes/routes';
import path = require('path');
import errorHandler from "./middlewares/error";

dotenv.config()

const app = express();

app.use(express.static(path.join(__dirname,'../public')));
app.use(express.urlencoded({extended:true}));


app.use(router)


//app.use((error:Error,request:Request, response:Response, next:NextFunction)=>{return response.status(500).json({message:error.message})})

app.use(errorHandler)


app.use((req,res:Response)=>{
    res.status(404)
    res.json({error:'EndPoint nao encontrado'})
});






app.listen(process.env.PORT, ()=>console.log('listening on port 3000'))
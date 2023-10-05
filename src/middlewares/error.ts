import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error,req: Request,res: Response,next: NextFunction) => {
  let statusCode =  500;
  let errMessage='Ocorreu um erro no servidor.'
  if(err.message){
    const [message, status]= err.message.split('.')
    errMessage = message;
    if(status){
      statusCode=parseInt(status)
    }
    statusCode=500
    
  }
   
 
  res.status(statusCode).json({
    
    message: errMessage
  });
};

export default errorHandler;

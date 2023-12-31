
import {Request,Response, NextFunction} from 'express'
import passport from '../config/passport'




export const ensureAuthenticated = (req:Request, res:Response, next:NextFunction) => {
    passport.authenticate('jwt', { session: false }, (err:any, user:any, info:any) => {
      if (err) {
        return next(err);
      }
  
      if (!user) {
        return res.status(401).json({ message: 'Não autorizado' });
      }
  
      req.user = user;
      next();
    })(req, res, next);
  };
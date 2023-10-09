type user= {
  id: string;
  name: string;
  email: string;
  password: string;
  accessId: string | null;
  locationId: string | null;
} 


import passport from "passport";
import dotenv from 'dotenv';

import { Strategy as JWTStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { client } from "../prisma/client";

dotenv.config();

//Options from passport, receive the token from auth header Bearer
const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.TOKEN_KEY as string
}

//payload receive 
passport.use(new JWTStrategy(options, async (payload, done) => {
  try {
    const userData = await client.user.findFirst({ where: { id: payload.sub } })

    
    if (userData) {
      const {password,email,...user}:Partial<user>=userData;
      
      return done(null, user);
    }

    return done(null, false);
  } catch (error) {
    return done(error, false);
  }

}));



export default passport


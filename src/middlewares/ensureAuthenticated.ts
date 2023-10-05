import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;


    if (!authToken) {
        return response.status(401).json({
            error:"Token is required"
        })
    }

    const [, token] = authToken.split(" ")

    try {
        verify(token, process.env.TOKEN_KEY as string);
        return next()
    } catch (err) {
        return response.status(401).json({
            error:"Token is invalid"
        })
    }

}
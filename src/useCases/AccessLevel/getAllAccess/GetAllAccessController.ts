import { Request,Response } from "express";
import { GetAllAccessUseCase } from "./GetAllAccessUseCase";



class GetAllAccessController {
    async handle(req:Request,res:Response){
        
        const getAllAccessUseCase = new GetAllAccessUseCase();
        const allAccess = await getAllAccessUseCase.execute()
        return res.json(allAccess);

    }
}

export {GetAllAccessController}
import { Request,Response } from "express"


class GrantAccessLeveltoUserController {
    async handle(req: Request, res: Response){
        const{user,acessLevel}= req.body;
    }
}

export {GrantAccessLeveltoUserController}
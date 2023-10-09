import { Request, Response, NextFunction } from "express";
import { client } from "../prisma/client";
import { User } from "@prisma/client";

export const ensureAdminstratorAuth = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as Partial<User>

    
    if (user) {
        if (user.accessId) {
            const accessLevel = await client.access.findFirst({
                where: { id: user.accessId }
            })
            if (accessLevel) {
                if (accessLevel.name === "admin") {
                    next();
                }else{
                    return res.status(403).json({ message: 'Nivel de acesso nao autorizado.' });
                }
            }
        }else{
            return res.status(403).json({ message: 'Nivel de acesso nao autorizado.' });
        }
    }
}

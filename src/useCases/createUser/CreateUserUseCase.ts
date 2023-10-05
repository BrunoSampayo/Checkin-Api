import { client } from "../../prisma/client";
import { hash } from "bcryptjs";



type UserRequest = {
    name: string,
    password: string,
    email: string
}

class CreateUserUseCase {


    async execute({ name, email, password }: UserRequest) {
        //verificar usuario existente
        const userAlreadyExist = await client.user.findFirst({
            where: {
                email
            }
        })

        if (userAlreadyExist) {
            throw new Error("User already exist.226")

        }

        //cadastro de usuario
        const hashPassword = await hash(password, 10);
        const user = await client.user.create({
            data: {
                name,
                email,
                password: hashPassword

            }
        });

        return user;


    }
}


export { CreateUserUseCase } 
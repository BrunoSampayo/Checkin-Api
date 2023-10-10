import {Router} from 'express'

import { CreateAccessController } from "../useCases/createAccess/CreateAccessController";
import { DeleteAccessController } from '../useCases/deleteAccess/DeleteAccessController';
import { GetAllAccessController } from '../useCases/getAllAccess/GetAllAccessController';
import { GrantAccessLeveltoUserController } from '../useCases/grantAcessLeveltoUser/GrantAccessLeveltoUserController';
import { GetAllUsersController } from "../useCases/getAllUsers/GetAllUsersController";
 

const accessRouter = Router()

const createAccessController = new CreateAccessController();
const deleteAccessController = new DeleteAccessController();
const getAllAccessController = new GetAllAccessController();
const grantAccessLeveltoUserController = new GrantAccessLeveltoUserController();
const getAllUsersController = new GetAllUsersController();

accessRouter.post("/access", createAccessController.handle); // criar nivel de acesso
accessRouter.get("/access", getAllAccessController.handle); // ver todos niveis de acesso
accessRouter.delete("/access", deleteAccessController.handle); // deletar um nivel de acesso

accessRouter.post("/user-access",grantAccessLeveltoUserController.handle) // atribuir nivel de accesso a um usuario

accessRouter.get("/users", getAllUsersController.handle) //retornar todos usuarios


export default accessRouter;
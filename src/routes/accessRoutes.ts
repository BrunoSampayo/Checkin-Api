import {Router} from 'express'

import { CreateAccessController } from "../useCases/createAccess/CreateAccessController";
import { DeleteAccessController } from '../useCases/deleteAccess/DeleteAccessController';
import { GetAllAccessController } from '../useCases/getAllAccess/GetAllAccessController';
import { GrantAccessLeveltoUserController } from '../useCases/grantAcessLeveltoUser/GrantAccessLeveltoUserController';
const accessRouter = Router()

const createAccessController = new CreateAccessController();
const deleteAccessController = new DeleteAccessController();
const getAllAccessController = new GetAllAccessController();
const grantAccessLeveltoUserController = new GrantAccessLeveltoUserController();

accessRouter.post("/create", createAccessController.handle);
accessRouter.get("/getall", getAllAccessController.handle);
accessRouter.post("/delete", deleteAccessController.handle);
accessRouter.post("/grant-to-user",grantAccessLeveltoUserController.handle)


export default accessRouter;
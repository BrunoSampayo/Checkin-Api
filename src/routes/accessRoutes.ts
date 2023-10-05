import {Router} from 'express'

import { CreateAccessController } from "../useCases/createAccess/CreateAccessController";
import { DeleteAccessController } from '../useCases/deleteAccess/DeleteAccessController';
import { GetAllAccessController } from '../useCases/getAllAccess/GetAllAccessController';

const accessRouter = Router()

const createAccessController = new CreateAccessController();
const deleteAccessController = new DeleteAccessController();
const getAllAccessController = new GetAllAccessController();

accessRouter.post("/create", createAccessController.handle);
accessRouter.get("/getall", getAllAccessController.handle);
accessRouter.post("/delete", deleteAccessController.handle);


export default accessRouter;
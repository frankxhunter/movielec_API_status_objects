import {Router} from 'express'
import {ObjectController} from '../controllers/object.js'

export const routerObjects = Router();

routerObjects.get("/status", ObjectController.getStatus)

routerObjects.get('/:id', ObjectController.getById);





import {Router} from 'express'
import objectController from '../controllers/object.js'

export const routerObjects = Router();

routerObjects.get('/all/:password',objectController.getAll);

routerObjects.get('/:id', objectController.getById);

routerObjects.post('/:password', objectController.create)

routerObjects.put('/:password', objectController.update)

routerObjects.delete('/:password/:id', objectController.delete)

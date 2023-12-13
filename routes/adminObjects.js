import {Router} from 'express'
import { ObjectController } from '../controllers/adminObject.js';
import { validatePassword } from '../tools/validations.js';

export const  routerAdminObject = Router();

routerAdminObject.use((req, res, next) => {
    const authorization = req.get('Authorization')
   if(authorization && validatePassword(authorization.split(" ")[1]))
    next();
    else{
        res.status(401).json( {error: "Error of the authentication"})
    }
}) 

routerAdminObject.get('/:filter?/:isavanced?',ObjectController.getAll);

routerAdminObject.post('/', ObjectController.create)

routerAdminObject.delete('/:id', ObjectController.delete)

routerAdminObject.put('/:id', ObjectController.update)


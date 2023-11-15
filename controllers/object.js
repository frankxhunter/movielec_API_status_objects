import { ObjectModel } from '../models/object.js'
export class ObjectController {

    static async getById(req, res) {
        const { id } = req.params;
        const object = await ObjectModel.getById(id);
        if (object) {
            console.log(object)
            res.json(object)
        } else {
            res.json({ error: "Object not found" })
            // Lanzar usuario no valido
        }
    }
  
}
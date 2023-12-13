import { ObjectModel } from '../models/object.js'
import { validateObject, validatePartialObject } from '../schema/objectSchema.js';

export class ObjectController {
    static async getAll(req, res) {
        const {filter, isavanced} = req.params 

        const objects = await ObjectModel.getAll(filter, isavanced);
        res.json(objects);

    }
    static async create(req, res) {
        const result = validateObject(req.body)
        if (result.error) {
            res.status(400).json({ error: result.error })
        }
        else {
            const object = await ObjectModel.create(result.data)
            res.json(object)
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        const object = await ObjectModel.delete(id);
        if (object) {
            res.json(object)
        }
        else (
            res.status(404).json({ error: "Object not found" })
        )
    }
    static async update(req, res) {
        const { id } = req.params;
        const result = validatePartialObject(req.body)

        if (result.success) {
            const object = await ObjectModel.update(id, result.data)
            if (object) {
                res.json(object)
            }
            else{
                res.status(404).json({error: "Object not found"})
            }
        }
        else {
            res.status(400).json(result.error.message)
        }
    }
}
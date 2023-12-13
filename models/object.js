import objects from '../objects.json' assert {type: "json"};
import enumStatus from "../enumStatus.json" assert {type: "json"}
import Fuse from "fuse.js"
import { v4 as uuidv4 } from 'uuid'

export class ObjectModel {
    static async getAll(filter, isavanced) {
        if (!filter) {
            return objects;
        }
        else if (isavanced !== "true") {
            console.log( filter)
            return objects.filter(obj => obj.orden === filter)
        }
        else {
            const options = {
                keys: [
                    "numeroTelefonico",
                    "orden",
                    "cliente",
                    "fechaPrevista",
                    "estado",
                    "notas"
                ],
                "minMatchCharLength": filter.length / 2,
                "threshold": 0.3
            }
            const fuse = new Fuse(objects, options);
            const result = fuse.search(filter)
            return result
        }
    }

    static async getById(id) {
        const object = objects.filter(obj => obj.numeroTelefonico === id);
        return object;
    }
    static async create(data) {
        const object = {
            id: uuidv4(),
            ...data
        }
        objects.push(object);
        return object
    }
    static async delete(id) {
        const pos = objects.findIndex(obj => obj.id === id);
        if (pos >= 0) {
            const objDelete = objects[pos];
            objects.splice(pos, 1);
            return objDelete
        }

    }
    static async update(id, data) {
        const index = objects.findIndex(obj => obj.id === id)
        if (index >= 0) {
            objects[index] = {
                ...objects[index],
                ...data
            }
            return objects[index]
        }
    }
    static async getStatus() {
        return enumStatus.status;
    }
}
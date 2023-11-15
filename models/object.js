import objects from '../objects.json' assert {type: "json"};
import { v4 as uuidv4 } from 'uuid'

export class ObjectModel {
    static async getAll() {
        return objects;
    }
    static async getById(id) {
        const object = objects.find(obj => obj.id === id);
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
    static async delete(id){
        const pos = objects.findIndex(obj => obj.id === id);
        if(pos>0){
           const objDelete = objects[pos];
           objects.splice(pos, 1);
           return objDelete
        }
        
    }
    static async update(id, data){
        const index = objects.findIndex(obj => obj.id === id)
        if(index >= 0 ){
            objects[index]= {
                ...objects[index],
                ...data
            }
            return objects[index]
        }
    }
}
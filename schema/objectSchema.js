import z from 'zod'
import enumStatus from "../enumStatus.json" assert {type: "json"};
import { dateToAmericanFormat, validateImagen } from '../tools/validations.js';

const status = enumStatus.status

const objectSchema = z.object({
    "numeroTelefonico": z.string().min(8).max(15).regex(/^\d+$/),
    "orden": z.number().int().positive().max(10000),
    "cliente": z.string().max(30),
    "fechaPrevista": z.date(),
    "estado":z.enum(status),
    "imageUrl": z.string(),
    "notas":z.string()

})

export function validateObject(object){
    if(object && object.fechaPrevista){
        object.fechaPrevista = new Date(object.fechaPrevista)
    }
    const result = objectSchema.safeParse(object);
    if(result.success){
        result.data.fechaPrevista = dateToAmericanFormat(result.data.fechaPrevista)
    }
    return result
}
export function validatePartialObject(object){
    if(object && object.fechaPrevista){
        object.fechaPrevista = new Date(object.fechaPrevista)
    }
    const result = objectSchema.partial().safeParse(object);
    if(result.success && result.data.fechaPrevista){
        result.data.fechaPrevista = dateToAmericanFormat(result.data.fechaPrevista)
    }
    return result
}
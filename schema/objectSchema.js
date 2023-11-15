import z from 'zod'

const status = ["En espera", "En progreso", "Estamos trabajando en ello", "Esperando la llegada de piezas", "Finalizado"]

const objectSchema = z.object({
    "orden": z.number().int().positive().max(10000),
    "cliente": z.string().max(30),
    "fechaPrevista": z.number(),
    "estado":z.enum(status),
    "notas":z.string()

})

export function validateObject(object){
    return objectSchema.safeParse(object);
}
export function validatePartialObject(object){
    return objectSchema.partial().safeParse(object)
}
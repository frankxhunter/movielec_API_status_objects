export class ObjectController{
    static async getAll(req, res){
        const {password} = req.params
        if(validatePassword(password)){

        }
        else{
            // Lanzar usuario no valido
        }
    }
}
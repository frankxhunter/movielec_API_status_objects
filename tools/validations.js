import passwordOrigin from '../secret/password.json' assert { type: "json"}
export const validatePassword = (password) => {
    if(password === passwordOrigin.password){
        return true
    }
    return false

}
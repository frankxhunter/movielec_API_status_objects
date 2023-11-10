import passwordOrigin from '../secret/password.json' assert { type: "json"}
export const validatePassword = (password) => {
    if(password === passwordOrigin){
        return true
    }
    return false

}
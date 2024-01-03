import passwordOrigin from '../secret/password.json' assert { type: "json"}
export const validatePassword = (password) => {
    if(password === passwordOrigin.password){
        return true
    }
    return false

}

export function dateToAmericanFormat(date){
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`
}

    
    export const validateImagen = value => {
        // Verifica si la cadena es una URL y termina con una extensión de imagen común
        const urlPattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
        return urlPattern.test(value);
      }
      
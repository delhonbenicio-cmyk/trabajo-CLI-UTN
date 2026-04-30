// indexl.js -> punto de entrada a la aplicacion, aqui es donde se ejecuta el codigo
// en index.js no se obtienen los datos, no se hacen validaciones, no se hace nada, solo se llama a las funciones que estan en controllers.js y se muestra el resultado
import { getUsers, createUser, updateUser, deleteUser } from "./controllers.js"


// npm run dev add juancito juancito@gmail.com aguanteelddl
const argv = process.argv
const params = argv.slice(2)
const operacion = params[0]
let resultado

// SPLICE corta el array y te devuelve lo que cortas, mientras que SLICE corta y te devuelve lo que sobra


const main = async () => {

    switch (operacion) {
    case "get":
        resultado = await getUsers()
        break
    case "add":
        resultado = await createUser(params[1], params[2], params[3])
        break
    case "update":
        const updates = { username: params[1], email: params[2], password: params[3]}
        resultado = await updateUser(params[4], updates)
        break
    case "delete":
        resultado = await deleteUser(params[1])
        break
    default:
        resultado = "operacion invalida"
    }
    console.log(resultado)
    setTimeout(() => 
        {process.exit(1)
    }, 2000)
}

main()
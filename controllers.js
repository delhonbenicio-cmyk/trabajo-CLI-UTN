import { db } from "./config.js"

const getUsers = async () => {
    const q = `SELECT * FROM users`
    const [response] = await db.query(q)
    return response
}

// declaracion de funcion es ensenarle a la pc lo que tiene que hacer
const createUser = async (username, email, password) => {
    // VALIDACIONES ADICIONALES.
    if (!username || !email || !password) {
        return "Data invalida, necesitas enviar username, email y password para ingresar"
    }

    if(!email.endsWith("@gmail.com")){
        return "el correo electronico deberia terminar con gmail.com"
    }

    if (username.length < 3) {
        return "El username debe tener al menos 3 caracteres"
    }

    if (password.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres"
    }


    const q = `INSERT INTO users (id, username, email, password) VALUES (?,?,?,?)`

    const [response] = await db.query(q, [crypto.randomUUID(), username, email, password])

    if(response.serverStatus === 2){
        return "Usuario creado con exito."
    }
}

const updateUser = async (id, updates) => {
    if (!id) {
        return "ID requerido"
    }

    const q = `UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?`
    const { username, email, password } = updates;
    const [response] = await db.query(q, [username, email, password, id])
    
    if (response.affectedRows === 0) {
        return "Usuario no encontrado";
    }
    return "Usuario actualizado exitosamente";
}

const deleteUser = async (id) => {
    const q = `DELETE from users WHERE id = ?`
    const [response] = await db.query(q,[id]);

    if(response.serverStatus === 2){
        return "usuario borrado"
    }
}

export { getUsers, createUser, updateUser, deleteUser }
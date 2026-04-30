# CLI de Gestión de Usuarios con Node.js y MySQL

## Tecnologias

- Node.js
- MySQL (XAMPP recomendado)

## Instalación

1. Clonar el repositorio
2. Instalar dependencias: npm install

## Configurar la base de datos

1. Iniciar XAMPP y activar Apache y MySQL
2. Abrir phpMyAdmin en http://localhost/phpmyadmin
3. Ejecutar el script database.sql

### Obtener todos los usuarios
node index.js get

### Crear usuario
node index.js add <username> <email> <password>

### Actualizar usuario
node index.js update <username> <email> <password> <id>

### Eliminar usuario
node index.js delete <id>

## Ejemplo de uso

node index.js add juancito juancito@gmail.com contraseña123
node index.js get
node index.js update juancito2 juancito2@gmail.com nueva123 <id>
node index.js delete <id>
## Problema:

Crear una aplicación en Express que gestione información sobre usuarios y sus hobbies. La aplicación debe tener dos rutas principales:

1. **/usuarios/:id:** Esta ruta debería devolver información básica sobre un usuario, como su nombre y ID. Si no se encuentra el usuario debe de

2. **/usuarios/:id/hobbie:** Esta ruta debería devolver el hobbie del usuario con el ID proporcionado. Sin embargo, el parámetro `hobbie` puede ser opcional. Si se proporciona, devolver el hobbie del usuario; de lo contrario, devolver un mensaje indicando que no se proporcionó información sobre el hobbie.

### Pistas:
- Utiliza `app.get()` para definir las rutas.
- Accede al parámetro `:id` usando `req.params.id`.
- Si el parámetro `hobbie` está presente, accede a él usando `req.params.hobbie`.
- Utiliza una estructura de datos simple para simular información de usuarios y sus hobbies.

Este ejercicio permitirá a los alumnos aplicar los conceptos aprendidos sobre rutas parametrizadas y entender cómo manejar parámetros opcionales en Express.

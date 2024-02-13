// REQUERIMOS EXPRESS
const express = require("express");

// EJECUTAMOS EXPRESS
const app = express();
// Datos simulados de usuarios
const usuarios = [
    { nombre: "Usuario1", id: 1, hobbie: "Fotografía" },
    { nombre: "Usuario2", id: 2, hobbie: "Viajar" },
    { nombre: "Usuario3", id: 3, hobbie: "Programar" },
];
// Ejercicio:

// Ruta para obtener información de un usuario por su ID aqui:
app.get("/usuarios/:id", (req,res) => {
    const usuarioId = req.params.id
    
    const usuario = usuarios.find((usuario)=> usuario.id == usuarioId )
    console.log("usuario: ",usuario)

    if (usuario){
        "Nombre: " + usuario.nombre
    }
    res.send("este es un listado de usuarios")
})


// Ruta para obtener información de un usuario por su ID y su hobbie (opcional) aqui:


const port = 4000;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));

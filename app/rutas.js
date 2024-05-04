const express = require("express");
const rutero = express.Router();
const controlador_tipo_usuario = require("./controladores/tipo_usuario")
const controlador_usuario = require("./controladores/usuario")

//rutas de la tabla tipo_usuario

rutero.post("/tipo-usuario/crear",controlador_tipo_usuario.crear)

rutero.get("/tipo-usuario/listar",controlador_tipo_usuario.listar)

rutero.get("/tipo-usuario/buscar-id/:id",controlador_tipo_usuario.buscar_id)

rutero.put("/tipo-usuario/actualizar",controlador_tipo_usuario.actualizar)

rutero.delete("/tipo-usuario/eliminar/:id",controlador_tipo_usuario.eliminar)

//rutas de la tabla usuario

rutero.post("/usuario/crear",controlador_usuario.crear)

rutero.get("/usuario/listar",controlador_usuario.listar)

rutero.get("/usuario/buscar-id/:id",controlador_usuario.buscar_id)

rutero.put("/usuario/actualizar",controlador_usuario.actualizar)

rutero.delete("/usuario/eliminar/:id",controlador_usuario.eliminar)








module.exports = rutero;
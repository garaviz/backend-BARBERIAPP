const express = require("express");
const rutero = express.Router();
const controlador_tipo_usuario = require("./controladores/tipo_usuario")
const controlador_usuario = require("./controladores/usuario")
const controlador_servicios = require("./controladores/servicios")
const controlador_agenda = require("./controladores/agenda")
const controlador_reservas = require("./controladores/reservas")

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

rutero.post("/usuario/login",controlador_usuario.login)

rutero.put("/usuario/actualizar",controlador_usuario.actualizar)

rutero.delete("/usuario/eliminar/:id",controlador_usuario.eliminar)

//rutas de la tabla servicios

rutero.post("/servicios/crear",controlador_servicios.crear)

rutero.get("/servicios/listar",controlador_servicios.listar)

rutero.get("/servicios/buscar-id/:id",controlador_servicios.buscar_id)

rutero.put("/servicios/actualizar",controlador_servicios.actualizar)

rutero.delete("/servicios/eliminar/:id",controlador_servicios.eliminar)

//rutas de la tabla agenda

rutero.post("/agenda/crear",controlador_agenda.crear)

rutero.get("/agenda/listar",controlador_agenda.listar)

rutero.get("/agenda/buscar-id/:id",controlador_agenda.buscar_id)

rutero.put("/agenda/actualizar",controlador_agenda.actualizar)

rutero.delete("/agenda/eliminar/:id",controlador_agenda.eliminar)

rutero.get("/agenda/listar_por_colaborador/:idColaborador",controlador_agenda.listar_por_colaborador)

rutero.get("/agenda/listar_por_colaborador_ocupada/:idColaborador",controlador_agenda.listar_por_colaborador_ocupada)

rutero.put("/agenda/actualizar_reserva",controlador_agenda.actualizar_reserva)

rutero.post("/agenda/validar_agenda",controlador_agenda.validar_agenda)

//rutas de la tabla reservas

rutero.post("/reservas/crear",controlador_reservas.crear)

rutero.get("/reservas/listar",controlador_reservas.listar)

rutero.get("/reservas/buscar-id/:id",controlador_reservas.buscar_id)

rutero.put("/reservas/actualizar",controlador_reservas.actualizar)

rutero.delete("/reservas/eliminar/:id",controlador_reservas.eliminar)





module.exports = rutero;
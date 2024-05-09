const servicio_reservas = module.exports;
const db_reservas = require("../datos/reservas");

servicio_reservas.crear = async(data)=>{
    const resp = await db_reservas.crear(data);
    console.log("res",resp);
    return {resp,error:false}
}
servicio_reservas.listar = async()=>{
    const resp = await db_reservas.listar();
    console.log("res",resp);
    return {resp,error:false}
}
servicio_reservas.buscar_id = async(id)=>{
    const resp = await db_reservas.buscar_id(id);
    console.log("res",resp);
    return {resp,error:false}
}
servicio_reservas.actualizar = async(data)=>{
    const resp = await db_reservas.actualizar(data);
    return {resp,error:false}
}
servicio_reservas.eliminar = async(id)=>{
    const resp = await db_reservas.eliminar(id);
    console.log("res",resp);
    return {resp,error:false}
}
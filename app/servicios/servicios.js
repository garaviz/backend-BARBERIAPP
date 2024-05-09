const servicio_servicios = module.exports;
const db_servicios = require("../datos/servicios");

servicio_servicios.crear = async(data)=>{
    const resp = await db_servicios.crear(data);
    console.log("res",resp);
    return {resp,error:false}
}
servicio_servicios.listar = async()=>{
    const resp = await db_servicios.listar();
    console.log("res",resp);
    return {resp,error:false}
}
servicio_servicios.buscar_id = async(id)=>{
    const resp = await db_servicios.buscar_id(id);
    console.log("res",resp);
    return {resp,error:false}
}
servicio_servicios.actualizar = async(data)=>{
    const resp = await db_servicios.actualizar(data);
    console.log("res",resp);
    return {resp,error:false}
}
servicio_servicios.eliminar = async(id)=>{
    const resp = await db_servicios.eliminar(id);
    console.log("res",resp);
    return {resp,error:false}
}
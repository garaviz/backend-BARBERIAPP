const servicio_agenda = module.exports;
const db_agenda = require("../datos/agenda");

servicio_agenda.crear = async(data)=>{
    data.fecha = new Date(data.fecha);
    const resp = await db_agenda.crear(data);
    console.log("res",resp);
    return {resp,error:false}
}
servicio_agenda.listar = async()=>{
    const resp = await db_agenda.listar();
    console.log("res",resp);
    return {resp,error:false}
}
servicio_agenda.buscar_id = async(id)=>{
    const resp = await db_agenda.buscar_id(id);
    console.log("res",resp);
    return {resp,error:false}
}
servicio_agenda.actualizar = async(data)=>{
    const resp = await db_agenda.actualizar(data);
    console.log("res",resp);
    return {resp,error:false}
}
servicio_agenda.eliminar = async(id)=>{
    const resp = await db_agenda.eliminar(id);
    console.log("res",resp);
    return {resp,error:false}
}
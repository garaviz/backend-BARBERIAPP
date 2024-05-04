const servicio_tipo_usuario = module.exports;
const db_tipo_usuario = require("../datos/tipo_usuario");

servicio_tipo_usuario.crear = async(data)=>{
    const resp = await db_tipo_usuario.crear(data);
    console.log("res",resp);
    return {resp,error:false}
}
servicio_tipo_usuario.listar = async()=>{
    const resp = await db_tipo_usuario.listar();
    console.log("res",resp);
    return {resp,error:false}
}
servicio_tipo_usuario.buscar_id = async(id)=>{
    const resp = await db_tipo_usuario.buscar_id(id);
    console.log("res",resp);
    return {resp,error:false}
}
servicio_tipo_usuario.actualizar = async(data)=>{
    const resp = await db_tipo_usuario.actualizar(data);
    console.log("res",resp);
    return {resp,error:false}
}
servicio_tipo_usuario.eliminar = async(id)=>{
    const resp = await db_tipo_usuario.eliminar(id);
    console.log("res",resp);
    return {resp,error:false}
}
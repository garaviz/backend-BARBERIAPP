const servicio_usuario = module.exports;
const db_usuario = require("../datos/usuario");

servicio_usuario.crear = async(data)=>{
    const resp = await db_usuario.crear(data);
    console.log("res",resp);
    return {resp,error:false}
}
servicio_usuario.listar = async()=>{
    const resp = await db_usuario.listar();
    console.log("res",resp);
    return {resp,error:false}
}
servicio_usuario.buscar_id = async(id)=>{
    const resp = await db_usuario.buscar_id(id);
    console.log("res",resp);
    return {resp,error:false}
}
servicio_usuario.login = async(body)=>{
    const resp = await db_usuario.login(body);
    if(resp==undefined){
        return {resp,error:true} 
    }
    return {resp,error:false}
}
servicio_usuario.actualizar = async(data)=>{
    const resp = await db_usuario.actualizar(data);
    console.log("res",resp);
    return {resp,error:false}
}
servicio_usuario.eliminar = async(id)=>{
    const resp = await db_usuario.eliminar(id);
    console.log("res",resp);
    return {resp,error:false}
}
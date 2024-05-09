const reservas = module.exports;
const base_datos = require("../configuraciones/basedatos");

reservas.crear = (data)=>{
    const {idUsuario,idAgenda,idServicios}=data;
    return new Promise((resolve,reject)=>{
      base_datos.query('INSERT INTO reservas(idUsuario,idAgenda,idServicios) VALUES(?,?,?)',[idUsuario,idAgenda,idServicios],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows)
        }
      })  
    })
}
reservas.listar = ()=>{
    return new Promise((resolve,reject)=>{
      base_datos.query('SELECT * FROM reservas',null,(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows)
        }
      })  
    })
}
reservas.buscar_id = (id)=>{
    return new Promise((resolve,reject)=>{
      base_datos.query('SELECT * FROM reservas WHERE idreservas = ?',[id],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows[0])
        }
      })  
    })
}
reservas.actualizar = (data)=>{
  const {idUsuario,idAgenda,idServicios,idReservas}=data
    return new Promise((resolve,reject)=>{
      base_datos.query('UPDATE reservas SET idUsuario = ? ,idAgenda = ?, idServicios = ? WHERE idReservas = ?',[idUsuario,idAgenda,idServicios,idReservas],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows[0])
        }
      })  
    })
}
reservas.eliminar = (id)=>{
    return new Promise((resolve,reject)=>{
      base_datos.query('DELETE FROM reservas WHERE idreservas = ?',[id],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows[0])
        }
      })  
    })
}
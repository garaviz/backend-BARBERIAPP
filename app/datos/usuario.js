const usuario = module.exports;
const base_datos = require("../configuraciones/basedatos");

usuario.crear = (data)=>{
    const {correoElectronico,nombre,telefono,idTipoUsuario,fechaNacimiento}=data;
    return new Promise((resolve,reject)=>{
      base_datos.query('INSERT INTO usuario(correoElectronico,nombre,telefono,idTipoUsuario,fechaNacimiento) VALUES(?,?,?,?,?)',[correoElectronico,nombre,telefono,idTipoUsuario,fechaNacimiento],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows)
        }
      })  
    })
}
usuario.listar = ()=>{
    return new Promise((resolve,reject)=>{
      base_datos.query('SELECT * FROM usuario',null,(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows)
        }
      })  
    })
}
usuario.buscar_id = (id)=>{
    return new Promise((resolve,reject)=>{
      base_datos.query('SELECT * FROM usuario WHERE idUsuario = ?',[id],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows[0])
        }
      })  
    })
}
usuario.actualizar = (data)=>{
  const {correoElectronico,nombre,telefono,idTipoUsuario,fechaNacimiento,id}=data
    return new Promise((resolve,reject)=>{
      base_datos.query('UPDATE usuario SET correoElectronico = ?,nombre = ?,telefono = ?,idTipoUsuario = ?,fechaNacimiento = ? WHERE idUsuario = ?',[correoElectronico,nombre,telefono,idTipoUsuario,fechaNacimiento,id],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows[0])
        }
      })  
    })
}
usuario.eliminar = (id)=>{
    return new Promise((resolve,reject)=>{
      base_datos.query('DELETE FROM usuario WHERE idUsuario = ?',[id],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows[0])
        }
      })  
    })
}
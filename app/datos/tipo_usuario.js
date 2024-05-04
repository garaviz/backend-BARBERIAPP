const tipo_usuario = module.exports;
const base_datos = require("../configuraciones/basedatos");

tipo_usuario.crear = (data)=>{
    const {nombre,descripcion}=data;
    return new Promise((resolve,reject)=>{
      base_datos.query('INSERT INTO tipousuario(nombre,descripcion) VALUES(?,?)',[nombre,descripcion],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows)
        }
      })  
    })
}
tipo_usuario.listar = ()=>{
    return new Promise((resolve,reject)=>{
      base_datos.query('SELECT * FROM tipousuario',null,(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows)
        }
      })  
    })
}
tipo_usuario.buscar_id = (id)=>{
    return new Promise((resolve,reject)=>{
      base_datos.query('SELECT * FROM tipousuario WHERE idTipoUsuario = ?',[id],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows[0])
        }
      })  
    })
}
tipo_usuario.actualizar = (data)=>{
  const {nombre,descripcion,id}=data
    return new Promise((resolve,reject)=>{
      base_datos.query('UPDATE tipousuario SET nombre = ? ,descripcion = ? WHERE idTipoUsuario = ?',[nombre,descripcion,id],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows[0])
        }
      })  
    })
}
tipo_usuario.eliminar = (id)=>{
    return new Promise((resolve,reject)=>{
      base_datos.query('DELETE FROM tipousuario WHERE idTipoUsuario = ?',[id],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows[0])
        }
      })  
    })
}
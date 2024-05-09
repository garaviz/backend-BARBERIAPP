const servicios = module.exports;
const base_datos = require("../configuraciones/basedatos");

servicios.crear = (data)=>{
    const {nombre,precio,descripcion}=data;
    return new Promise((resolve,reject)=>{
      base_datos.query('INSERT INTO servicios(nombre,precio,descripcion) VALUES(?,?,?)',[nombre,precio,descripcion],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows)
        }
      })  
    })
}
servicios.listar = ()=>{
    return new Promise((resolve,reject)=>{
      base_datos.query('SELECT * FROM servicios',null,(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows)
        }
      })  
    })
}
servicios.buscar_id = (id)=>{
    return new Promise((resolve,reject)=>{
      base_datos.query('SELECT * FROM servicios WHERE idServicios = ?',[id],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows[0])
        }
      })  
    })
}
servicios.actualizar = (data)=>{
  const {nombre,descripcion,idServicios,precio}=data
    return new Promise((resolve,reject)=>{
      base_datos.query('UPDATE servicios SET nombre = ? ,precio = ?,descripcion = ? WHERE idServicios = ?',[nombre,precio,descripcion,idServicios],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows[0])
        }
      })  
    })
}
servicios.eliminar = (id)=>{
    return new Promise((resolve,reject)=>{
      base_datos.query('DELETE FROM servicios WHERE idServicios = ?',[id],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows[0])
        }
      })  
    })
}
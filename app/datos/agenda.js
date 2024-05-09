const agenda = module.exports;
const base_datos = require("../configuraciones/basedatos");

agenda.crear = (data)=>{
    const {fecha,idColaborador,reservada,hora}=data;
    return new Promise((resolve,reject)=>{
      base_datos.query('INSERT INTO agenda(fecha,idColaborador,reservada,hora) VALUES(?,?,?,?)',[fecha,idColaborador,reservada,hora],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows)
        }
      })  
    })
}
agenda.listar = ()=>{
    return new Promise((resolve,reject)=>{
      base_datos.query('SELECT * FROM agenda',null,(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows)
        }
      })  
    })
}
agenda.buscar_id = (id)=>{
    return new Promise((resolve,reject)=>{
      base_datos.query('SELECT * FROM agenda WHERE idAgenda = ?',[id],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows[0])
        }
      })  
    })
}
agenda.actualizar = (data)=>{
  const {fecha,idColaborador,reservada,hora,idAgenda}=data
    return new Promise((resolve,reject)=>{
      base_datos.query('UPDATE agenda SET fecha = ? ,idColaborador = ?, reservada = ?, hora = ? WHERE idAgenda = ?',[fecha,idColaborador,reservada,hora,idAgenda],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows[0])
        }
      })  
    })
}
agenda.eliminar = (id)=>{
    return new Promise((resolve,reject)=>{
      base_datos.query('DELETE FROM agenda WHERE idAgenda = ?',[id],(err,rows)=>{
        if(err){
            reject(err)
        }else{
            resolve(rows[0])
        }
      })  
    })
}
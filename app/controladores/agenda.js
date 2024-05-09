const controlador_agenda = module.exports;
const servicio_agenda = require("../servicios/agenda");

controlador_agenda.crear = async(req,res)=>{
    const data = req.body
    return await servicio_agenda.crear(data).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_agenda.listar = async(req,res)=>{
    return await servicio_agenda.listar().then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_agenda.buscar_id = async(req,res)=>{
    const id = req.params.id
    return await servicio_agenda.buscar_id(id).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_agenda.actualizar = async(req,res)=>{
    const data = req.body
    return await servicio_agenda.actualizar(data).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_agenda.eliminar = async(req,res)=>{
    const id = req.params.id
    return await servicio_agenda.eliminar(id).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
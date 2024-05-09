const controlador_servicios = module.exports;
const servicio_servicios = require("../servicios/servicios");

controlador_servicios.crear = async(req,res)=>{
    const data = req.body
    return await servicio_servicios.crear(data).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_servicios.listar = async(req,res)=>{
    return await servicio_servicios.listar().then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_servicios.buscar_id = async(req,res)=>{
    const id = req.params.id
    return await servicio_servicios.buscar_id(id).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_servicios.actualizar = async(req,res)=>{
    const data = req.body
    return await servicio_servicios.actualizar(data).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_servicios.eliminar = async(req,res)=>{
    const id = req.params.id
    return await servicio_servicios.eliminar(id).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
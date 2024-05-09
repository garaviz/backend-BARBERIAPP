const controlador_reservas = module.exports;
const servicio_reservas = require("../servicios/reservas");

controlador_reservas.crear = async(req,res)=>{
    const data = req.body
    return await servicio_reservas.crear(data).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_reservas.listar = async(req,res)=>{
    return await servicio_reservas.listar().then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_reservas.buscar_id = async(req,res)=>{
    const id = req.params.id
    return await servicio_reservas.buscar_id(id).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_reservas.actualizar = async(req,res)=>{
    const data = req.body
    return await servicio_reservas.actualizar(data).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_reservas.eliminar = async(req,res)=>{
    const id = req.params.id
    return await servicio_reservas.eliminar(id).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
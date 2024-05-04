const controlador_tipo_usuario = module.exports;
const servicio_tipo_usuario = require("../servicios/tipo_usuario");

controlador_tipo_usuario.crear = async(req,res)=>{
    const data = req.body
    return await servicio_tipo_usuario.crear(data).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_tipo_usuario.listar = async(req,res)=>{
    return await servicio_tipo_usuario.listar().then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_tipo_usuario.buscar_id = async(req,res)=>{
    const id = req.params.id
    return await servicio_tipo_usuario.buscar_id(id).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_tipo_usuario.actualizar = async(req,res)=>{
    const data = req.body
    return await servicio_tipo_usuario.actualizar(data).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_tipo_usuario.eliminar = async(req,res)=>{
    const id = req.params.id
    return await servicio_tipo_usuario.eliminar(id).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
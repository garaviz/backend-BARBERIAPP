const controlador_usuario = module.exports;
const servicio_usuario = require("../servicios/usuario");

controlador_usuario.crear = async(req,res)=>{
    const data = req.body
    return await servicio_usuario.crear(data).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        console.log("error",error);
        res.status(500).json(error)
    })
}
controlador_usuario.listar = async(req,res)=>{
    return await servicio_usuario.listar().then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_usuario.buscar_id = async(req,res)=>{
    const id = req.params.id
    return await servicio_usuario.buscar_id(id).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_usuario.login = async(req,res)=>{
    const body = req.body
    console.log("body",body);
    return await servicio_usuario.login(body).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        console.log("error",error);
        res.status(500).json(error)
    })
}
controlador_usuario.actualizar = async(req,res)=>{
    const data = req.body
    return await servicio_usuario.actualizar(data).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
controlador_usuario.eliminar = async(req,res)=>{
    const id = req.params.id
    return await servicio_usuario.eliminar(id).then(response=>{
        if(response.error==false){

            res.status(200).json(response)
        }else{
            res.status(400).json(Response)
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}
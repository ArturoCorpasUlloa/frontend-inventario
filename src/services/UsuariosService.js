import { axiosConfig } from "../configurations/axiosConfig"


//Obtiene todos los usuarios

const obtenerUsuarios = (estado = true) => {
    return axiosConfig.get('usuarios?estado='+estado,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//Crea un usuario

const crearUsuarios = (data) => {
    return axiosConfig.post('usuarios', data,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//Actualiza por ID

const actualizaUsuarioID = (tipoId, data) => {
    return axiosConfig.put('usuarios/'+tipoId, data,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//Elimina

const eliminarUsuarioID = (tipoId) => {
    return axiosConfig.delete('usuarios/'+tipoId,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//obtiene Usuario por ID

const obtenerUsuarioID = (tipoId) => {
    return axiosConfig.get('usuarios/'+tipoId,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}



export{
    obtenerUsuarios,
    crearUsuarios,
    actualizaUsuarioID,
    eliminarUsuarioID,
    obtenerUsuarioID
}  

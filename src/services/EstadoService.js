import { axiosConfig } from "../configurations/axiosConfig"


//Obtiene todos los estados

const obtenerEstados = (estado = true) => {
    return axiosConfig.get('estados?estado='+estado,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//Crea estado

const crearEstado = (data) => {
    return axiosConfig.post('estados', data,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//Actualiza por ID

const actualizaEstadoporID = (tipoId, data) => {
    return axiosConfig.put('estados/'+tipoId, data,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//Elimina

const eliminarEstadoID = (tipoId) => {
    return axiosConfig.delete('estados/'+tipoId,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//obtiene estado por ID

const obtenerEstadoID = (tipoId) => {
    return axiosConfig.get('etados/'+tipoId,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}



export{
    obtenerEstados,
    crearEstado,
    actualizaEstadoporID,
    eliminarEstadoID,
    obtenerEstadoID    
}
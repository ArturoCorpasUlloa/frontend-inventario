import { axiosConfig } from "../configurations/axiosConfig"


//Obtiene todos los tipos de equipo

const obtenertipoequipos = (estado = true) => {
    return axiosConfig.get('tipoequipos?estado='+estado,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//Crea tipo de equipo

const creartipoequipo = (data) => {
    return axiosConfig.post('tipoequipos', data,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//Actualiza por ID

const actualizartipoequipoID = (tipoId, data) => {
    return axiosConfig.put('tipoequipos/'+tipoId, data,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//Elimina

const eliminartipoequipoID = (tipoId) => {
    return axiosConfig.delete('tipoequipos/'+tipoId,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//obtiene tipo de equipo por ID

const obtenertipoequipoID = (tipoId) => {
    return axiosConfig.get('tipoequipos/'+tipoId,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}



export{
    obtenertipoequipos,
    creartipoequipo,
    actualizartipoequipoID,
    eliminartipoequipoID,
    obtenertipoequipoID
}
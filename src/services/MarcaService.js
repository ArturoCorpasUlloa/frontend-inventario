import { axiosConfig } from "../configurations/axiosConfig"


//Obtiene todos las marcas

const obtenerMarcas = (estado = true) => {
    return axiosConfig.get('marcas?estado='+estado,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//Crea marca

const crearMarca = (data) => {
    return axiosConfig.post('marcas', data,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//Actualiza por ID

const actualizaMarcaID = (tipoId, data) => {
    return axiosConfig.put('marcas/'+tipoId, data,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//Elimina

const eliminarMarcaID = (tipoId) => {
    return axiosConfig.delete('marcas/'+tipoId,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}

//obtiene marca por ID

const obtenerMarcaID = (tipoId) => {
    return axiosConfig.get('marcas/'+tipoId,{
        headers:{
             'Content-Type': 'application/json'
        }
    })
}



export{
    obtenerMarcas,
    crearMarca,
    actualizaMarcaID,
    eliminarMarcaID,
    obtenerMarcaID 
}
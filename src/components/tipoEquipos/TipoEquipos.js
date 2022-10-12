import dayjs from 'dayjs'
import React,{useEffect, useState} from 'react'
import {creartipoequipo, obtenertipoequipos,eliminartipoequipoID} from '../../services/TipoEquipoService'
import HeaderTable from '../ui/HeaderTable'
import Modal from '../ui/Modal'


export default function TipoEquipos() {

  const [tipoEquipos, setTipoEquipos] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState(true)
  const [error, setError] = useState(false)
  const [tipoEquipo, setTipoEquipo] = useState({
      nombre: ''
  })

  const [errorSend, setErrorSend] = useState({status : false, msg:''})
  
  const listTipoEquipos = async () =>{
    setLoading(true)
    try{  
      setError(false)    
      const {data} = await obtenertipoequipos(query)
      setTipoEquipos(data)
      setLoading(false)
      console.log(data)
    }catch(e){
      console.log(e)
      setLoading(false)
      setError(true)
    }
  }
  
  useEffect(() => {
    listTipoEquipos();
    },[query])

  const cambiarSwitch =() =>{
    setQuery(!query)
  }

  const guardarTipoEquipo = async () => {
    setLoading(true)
    setErrorSend({status: false, msg:''})
    try{
      const res = await creartipoequipo(tipoEquipo)
      console.log(res)
      setLoading(false)
      setTipoEquipo({nombre:''})
      listTipoEquipos()
    }catch(e){
      console.log(e)
      setLoading(false)
      const{data} = e.response
      if(data){        
        setErrorSend({status: true, msg: data.msg})
      }      
    }
  }

  const handleElement = e => {
    setTipoEquipo({
      ...tipoEquipo,
      [e.target.name] : e.target.value
    })
  }

  const eliminartipoequipo = async (e) => {
    setLoading(true)
    try{
      setError(false)
      const id = e.target.id
      console.log(id)
      const res = await eliminartipoequipoID(id)
      console.log(res)
      listTipoEquipos();
      setLoading(false)
    }catch(e){
      console.log(e)
      setError(true)
      setLoading(false)
    }
 }

 const editarTipoEquipo = async () =>{
    console.log('editar')
 }

 
  return (
   <div>
        <Modal titulo={'Tipo de Equipo'}
        guardar={guardarTipoEquipo}
        element={tipoEquipo}
        change={handleElement}
        />
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar ➕</button>
        <div className="form-check form-switch">
           <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={query} onChange={cambiarSwitch}/>
           <label className="form-check-label" htmlFor="flexSwitchCheckChecked"> Inactivo / Activo</label>
          </div>
          {
            loading &&
            (<div className="d-flex justify-content-center">
             <div className="spinner-border" role="status">
             <span className="visually-hidden">Loading...</span>
             </div>
             </div>)
          }
          {
            error &&(
            <div className="alert alert-danger" role="alert">
               Error al cargar los datos 
             </div>)
            
          }
          {
            errorSend.status &&(
            <div className="alert alert-danger" role="alert">
               {errorSend.msg}
            </div>)
            
          }


        <table className="table">
          <HeaderTable/>
          <tbody>
             {
              tipoEquipos.map((tipoEquipos,index) => {
                 return(
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{tipoEquipos.nombre}</td>
                    <td>{tipoEquipos.estado? 'Activo' : 'Inactivo'}</td>
                    <td>{dayjs(tipoEquipos.fechaCreacion).format('YYYY-MM-DD')}</td>
                    <td>{dayjs(tipoEquipos.fechaActualizacion).format('YYYY-MM-DD')}</td>
                    <td>
                      <button type="button" className="btn btn-success">Editar ✏</button>
                      <button id={tipoEquipos._id} type="button" className="btn btn-danger" onClick={eliminartipoequipo}>Eliminar ❌</button>   
                    </td>
                  </tr> 
                 )
              })            
             }
                                 
          </tbody>
        </table>        
    </div>
  )
}
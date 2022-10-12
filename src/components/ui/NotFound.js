import React from 'react'
import notFound from './NotFound.png'

export default function NotFound() {
  return (
    <div>
      <h2>Página no encontrada</h2>
      <img alt="" className='figure img img-fluid d-block' src={notFound}/>     
    </div>
  )
}

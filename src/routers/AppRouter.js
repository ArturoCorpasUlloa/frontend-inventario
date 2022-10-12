import React from 'react'
import NavBar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";
import { Route, Routes } from 'react-router-dom';
import TipoEquipos from '../components/tipoEquipos/TipoEquipos';
import Marca from '../components/marca/Marca';
import Estado from '../components/estados/Estados';
import Usuario from '../components/usuarios/Usuarios';
import Inventario from '../components/inventarios/Inventarios';
import NotFound from '../components/ui/NotFound';

export default function AppRouter() {
  return (
    <div className="container">
        <NavBar title={'IUD'}/>
        <main className='container'>
        <Routes>
            <Route path='/tipoEquipo' element={<TipoEquipos/>}/>
            <Route path='/marca' element={<Marca/>}/>
            <Route path='/estado' element={<Estado/>}/>
            <Route path='/usuario' element={<Usuario/>}/>
            <Route path='/inventario' element={<Inventario/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
        </main>
        <Footer/>
    </div>
  )
}

import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Inicio from './Paginas/Inicio';
import Nosotros from './Paginas/Nosotros';
import Quienes_somos from './Paginas/Quienes_somos';
import Imagenes from './Paginas/Imagenes';
import Contacto from './Paginas/Contacto';

function App() {
  return (
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/quienes_somos' element={<Quienes_somos/>} />
            <Route path='/nosotros' element={<Nosotros/>} />
            <Route path='/imagenes' element={<Imagenes/>} />
            <Route path='/contacto' element={<Contacto/>} />
          </Routes>
        </LocalizationProvider>
      </div>
  );
}

export default App;

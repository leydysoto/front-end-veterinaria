import ListaClientes from './components/ListaClientes';
import CrearCliente from './components/CrearCliente';
import ListaMascota from './components/ListaMascota';
import CrearMascota from './components/CrearMascota';
import ListaServicios from './components/ListaServicios';
import CrearServicio from './components/CrearServicio'
import ListaCitas from './components/ListaCitas';
import CrearCita from './components/CrearCita';
import ListaHistorialMedico from './components/ListaHistorialMedico';
import CrearHistorialMedico from './components/crearHistorialMedico';

import Header from './components/Header';
import Footer from './components/footer';

import {BrowserRouter,Route,Routes} from 'react-router-dom';

import './App.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Header/>
          <div>
            <Routes>
              <Route exact path='/clientes' element={<ListaClientes/>}></Route>
              <Route exact path='/crear' element={<CrearCliente/>}></Route>
              <Route exact path='/edit-cliente/:id' element={<CrearCliente/>}></Route>

              <Route exact path='/listaMascota' element={<ListaMascota/>}></Route>
              <Route exact path='/crearMascota' element={<CrearMascota/>}></Route>
              <Route exact path='/edit-mascota/:id' element={<CrearMascota/>}></Route>

              <Route exact path='/lista-servicios' element={<ListaServicios/>}></Route>
              <Route exact path='/crear-servicio' element={<CrearServicio/>}></Route>
              <Route exact path='/edit-servicio/:id' element={<CrearServicio/>}></Route>

              <Route exact path='/lista-citas' element={<ListaCitas/>}></Route>
              <Route exact path='/crear-cita' element={<CrearCita/>}></Route>
              <Route exact path='/edit-cita/:id' element={<CrearCita/>}></Route>

              <Route exact path='/lista-historial-medico' element={<ListaHistorialMedico/>}></Route>
              <Route exact path='/crear-historial-medico'element={<CrearHistorialMedico/>}></Route>
              <Route exact path='/edit-historial-medico/:id'element={<CrearHistorialMedico/>}></Route>
            </Routes> 
          </div>
          <Footer/>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App

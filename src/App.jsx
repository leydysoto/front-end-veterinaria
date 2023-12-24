import ListaClientes from './components/ListaClientes';
import CrearCliente from './components/crearCliente';
import ListaMascota from './components/ListaMascota';
import CrearMascota from './components/CrearMascota';
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
            </Routes> 
          </div>
          <Footer/>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App

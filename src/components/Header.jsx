import React from 'react'
const Header = () => {
  return (
    <div>
        <header className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div>
                <a href="/clientes" className='navbar-brand'>Clientes</a>
            </div>
            <div>
            <a href="/listaMascota" className='navbar-brand'> Mascotas</a>
            
            </div>
            <div>
            <a href="/lista-servicios" className='navbar-brand'> Servicios</a>
            </div>
            <div>
              <a href="/lista-citas" className='navbar-brand'>citas</a>
            </div>
            <div>
              <a href="/lista-historial-medico" className='navbar-brand'>historial Medico</a>
            </div>
        </header>
    </div>
  )
}

export default Header

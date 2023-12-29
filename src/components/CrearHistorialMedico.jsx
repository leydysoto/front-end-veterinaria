import React, { useState } from 'react'

const CrearHistorialMedico = () => {
  const [descripcion,setDescripcion]=useState('')
  const [diagnostico,setDiagnostico]=useState('')
  const [tratamiento,setTratamiento]=useState('')
  return (
    <div className='container mt-2'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          <h1 className='text-center'> crear</h1>
          <div className='body-card'>
            <form>
              <div className='form-group mb-2'>
              <label htmlFor="cita" className='form-label'>cita:</label>
              <select 
                
              >
              <option value="">Seleccionar cita</option>
              </select>
              

              </div>


              <div className='form-group mb-2'>
                <label htmlFor="descripcion">descripcion</label>
                <input type="text" 
                placeholder='ingrese una descripcion'
                name='descripcion'
                id='descripcion'
                value={descripcion}
                onChange={(e)=>setDescripcion(e.target.value)}
                />
              </div>

              <div className='form-group mb-2'>
                <label htmlFor="diagnostico">diagnostico</label>
                <input type="text" 
                placeholder='ingrese diagnostico'
                name='diagnostico'
                id='diagnostico'
                value={diagnostico}
                onChange={(e)=>setDiagnostico(e.target.value)}
                />
              </div>

              <div className='form-group mb-2'>
                <label htmlFor="tratamiento">tratamiento:</label>
                <input type="text"
                placeholder='ingrese el tratamiento'
                name='tratamiento'
                id='tratamiento'
                value={tratamiento}
                onChange={(e)=>setTratamiento(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrearHistorialMedico

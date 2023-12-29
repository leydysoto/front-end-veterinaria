import React, { useEffect, useState } from 'react'
import HistorialMedicoService from '../services/HistorialMedicoService'
import { Link } from 'react-router-dom'
const ListaHistorialMedico = () => {
  const [historialMedicos,setHistorialMedicos]=useState([])

  useEffect(()=>{
    HistorialMedicoService.getAllHistorialMedico().then((response)=>{
      setHistorialMedicos(response.data)
    })
  })

  return (
    <div className='container'>
      
      <h1 className='text-center'>lista de historial medicos</h1>
      <Link to='/crear-historial-medico' className='btn btn-danger mb-2'>crear historial</Link>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>id</th>
            <th>fecha</th>
            <th>descripcion</th>
            <th>diagnostico</th>
            <th>tratamiento</th>
            <th>cita</th>
            <th>cliente</th>
            <th>mascota</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            historialMedicos.map(historialMedico=>(
              <tr key={historialMedico.historialId}>
                <td>{historialMedico.historialId}</td>
                <td>{historialMedico.fecha}</td>
                <td>{historialMedico.descripcion}</td>
                <td>{historialMedico.diagnostico}</td>
                <td>{historialMedico.tratamiento}</td>
                <td>{historialMedico.cita.citaId}</td>
                <td>{historialMedico.cita.cliente.nombre}</td>
                <td>{historialMedico.cita.mascota.nombre}</td>
                <td>
                  <Link to={`/edit-historial-medico/${historialMedico.historialId}` } className='btn btn-success'>editar</Link>
                </td>

              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListaHistorialMedico
import React, { useEffect, useState } from 'react'
import CitaService from '../services/CitaService'
import { Link } from 'react-router-dom'

const ListaCitas = () => {
  const [citas,SetCitas]=useState([])

  useEffect(()=>{
    CitaService.getAllCitas().then(response=>{
      SetCitas(response.data);

    }).catch(error=>{
      console.log(error)
    })

  })
  return (
    <div className='container'>
      <h1 className='text-center'>lista de citas</h1>
      <Link to='/crear-cita' className='btn btn-primary mb-2'> crear cita</Link>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
          <td>Id</td>
          <td>fecha</td>
          <td>nombre cliente</td>
          <td>mascota</td>
          <td>acciones</td>
          </tr>
        </thead>
        <tbody>
          {citas.map(cita=>(
            <tr key={cita.citaId}>
              <td>{cita.citaId}</td>
              <td>{cita.fecha}</td>
              <td>{cita.cliente.nombre}</td>
              <td>{cita.mascota.nombre}</td> 
              <td>
                <Link to={`/edit-cita/${cita.citaId}`} className='btn btn-success'>editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default ListaCitas


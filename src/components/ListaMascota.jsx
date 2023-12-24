import React, { useEffect, useState } from 'react'
import MascotaService from '../services/MascotaService'
import { Link } from 'react-router-dom';

const ListaMascota = () => {
  const [mascotas,setMascotas]=useState([])
    useEffect(()=>{
      MascotaService.getAllMascota().then(response=>{
        setMascotas(response.data);
        console.log(response.data);
      }).catch(error=>{
        console.log(error);
      })

    },[])
  
  return (
    <div className='container'>
      <h1 className='text-center'>lista de clientes</h1>
      <Link to='/crearMascota' className='btn btn-primary mb-2'>crear mascota</Link> 
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Especie</th>
            <th>Raza</th>
            <th>Fecha de Nacimiento</th>
            <th>Dueño</th>
            
          </tr>
        </thead>
        <tbody>
          {mascotas.map(mascota => (
            <tr key={mascota.mascotaId}>
              <td>{mascota.mascotaId}</td>
              <td>{mascota.nombre}</td>
              <td>{mascota.especie}</td>
              <td>{mascota.raza}</td>
              <td>{mascota.fechaNacimiento}</td>
              <td>{mascota.cliente.nombre}</td>
              <td>
                   <Link className='btn btn-info' to={`/edit-mascota/${mascota.mascotaId}`}>Actualizar</Link>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListaMascota

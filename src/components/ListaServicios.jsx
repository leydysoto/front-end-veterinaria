import React, { useEffect, useState } from 'react'
import ServicioService from '../services/ServicioService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const ListaServicios = () => {
    const [servicios, setServicios]=useState([]);
    useEffect(()=>{
        ServicioService.getAllServicios().then(response=>{
            setServicios(response.data);

        }).catch(error=>{
            console.log(error);
        })
    },[])
  return (
    <div className='container'>
      <h1 className='text-center'>lista servicio</h1>
      <Link to='/crear-servicio' className='btn btn-primary mb-2'>crear servicios</Link>
      <table className='table table-bordered table-striped'>
        <thead>
            <tr>
                <th>Id</th>
                <th>nombre</th>
                <th>descripcion</th>
                <th>precio</th>
                <th>acciones</th>
            </tr>
        </thead>
        <tbody>
            {
                servicios.map(
                    servicio=>(
                        <tr key={servicio.servicioId}>
                            <td>{servicio.servicioId}</td>
                            <td>{servicio.nombre}</td>
                            <td>{servicio.descripcion}</td>
                            <td>{servicio.precio}</td>
                            <td><Link to={`/edit-servicio/${servicio.servicioId}`} className='btn btn-primary mb-2'>Actualizar</Link></td>
                        </tr>
                    )
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListaServicios

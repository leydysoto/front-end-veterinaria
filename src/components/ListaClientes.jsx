import React, { useEffect,useState } from 'react'
import ClienteService from '../services/ClienteService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ListaClientes = () => {
    const [clientes,setClientes]=useState([])
    useEffect(()=>{
      ClienteService.getAllClientes().then(response=>{
        setClientes(response.data);
        console.log(response.data);
      }).catch(error=>{
        console.log(error);
      })

    },[])
  return (
    <div className='container'>
      <h1 className='text-center'>lista de clientes</h1>
       <Link to='/crear' className='btn btn-primary mb-2'>crear cliente</Link> 
      <table className='table table-bordered table-striped'>
        <thead>
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            clientes.map(
              cliente => (<tr key={cliente.clienteId}>
                <td>{cliente.clienteId}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.correoElectronico}</td>
                <td>
                   <Link className='btn btn-info' to={`/edit-cliente/${cliente.clienteId}`}>Actualizar</Link>
                </td>
              </tr>)
            )
          }
        </tbody>
      </table>
    </div>
  )
}
export default ListaClientes;

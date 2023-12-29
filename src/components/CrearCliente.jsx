import React, { useEffect, useState } from 'react'
import ClienteService from '../services/ClienteService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CrearCliente = () => {
  const [nombre,setNombre]=useState('');
  const [telefono,setTelefono]=useState('');
  const [correoElectronico,setCorreoElectronico]=useState('')
  const navigate =useNavigate();
  const {id}=useParams();
  
  const guardarOactualizarCliente=(e)=>{
    e.preventDefault();
    const cliente={nombre,telefono,correoElectronico};
    if(id){
      ClienteService.updateCliente(id, cliente).then((response)=>{
        console.log(response.data);
        navigate('/clientes')
      }).catch(error=>{console.log(error)})

    }else{
      ClienteService.createCliente(cliente).then((response)=>{
        console.log(response.data);
        navigate('/clientes')
  
      }).catch(error=>{console.log(error)})
    }   
  }
  
  
  useEffect(()=>{
    ClienteService.getClienteById(id).then((response)=>{
      setNombre(response.data.nombre);
      setTelefono(response.data.telefono);
      setCorreoElectronico(response.data.correoElectronico);

    }).catch(error=>{
      console.log(error);
    })
  },[])
  

  const titulo = id ? 'Actualizar cliente' : 'Crear cliente';
  
  return (
    <div>
      <div className='container mt-2'>
        <div className='row '>
          <div className='card col-md-6 offset-md-3 '>
            <h2 className='text-center'>{titulo}</h2>
            <div className='card-body'>
              <form >
                <div className='form-group mb-2'>
                  <label className='form-label'>nombre:</label>
                  <input
                    type='text'
                    placeholder='ingrese su nombre'
                    name='nombre'
                    className='form-control'
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                  />
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>telefono:</label>
                  <input
                    type='text'
                    placeholder='ingrese su telefono'
                    name='telefono'
                    className='form-control'
                    value={telefono}
                    onChange={(e)=>setTelefono(e.target.value)}
                  />
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>correo:</label>
                  <input
                    type='email'
                    placeholder='ingrese su correo'
                    name='correoElectronico'
                    className='form-control'
                    value={correoElectronico}
                    onChange={(e)=>setCorreoElectronico(e.target.value)}
                  />
                </div>
                <button className='btn btn-success' onClick={(e)=> guardarOactualizarCliente(e)}>guardarCliente</button>
                &nbsp;&nbsp;
                <Link to='/clientes' className='btn btn-danger'>cancelar</Link>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CrearCliente

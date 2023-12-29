import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ServicioService from '../services/ServicioService'

const CrearServicio = () => {
  const [nombre, setNombre]=useState('')
  const [descripcion,setDescripcion]=useState('')
  const [precio,setPrecio]=useState('0')
  const navigate=useNavigate();
  const {id}=useParams();

  const guardarOactualizarServicio=(e)=>{
    e.preventDefault();
    const servicio={nombre,descripcion,precio};
    if(id){
      ServicioService.updateServicio(id,servicio).then((response)=>{
        navigate('/lista-servicios')
      }).catch(error=>{console.log(error)})
    }else{
      ServicioService.createServicio(servicio).then((response)=>{
        navigate('/lista-servicios')

      }).catch(error=>{console.log(error)})
    }
  }
  useEffect(()=>{
    ServicioService.getServicioById(id).then((response)=>{
      setNombre(response.data.nombre);
      setDescripcion(response.data.descripcion);
      setPrecio(response.data.setPrecio);
    }).catch(error=>{
      console.log(error);
    })
  },[])

  const titulo=id?'actualizar Servicio':'crear servicio'
  return (
    <div>
      <div className='container mt-2'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3'>
            <h2 className='text-center'>{titulo}</h2>
            <div className='card-body'>
              <form>
                <div className='form-group mb-2'>
                  <label className='form-label'>nombre:</label>
                  <input
                    type='text'
                    placeholder='ingrese su nombre'
                    name='nombre'
                    className='form-control'
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)} 
                  >
                  </input>
                </div>
                <div className='form-group mb-2'>
                  <label className='form-label'>descripcion:</label>
                  <input
                  type='text'
                  placeholder='ingrese descripcion'
                  className='form-control'
                  value={descripcion}
                  onChange={(e)=>setDescripcion(e.target.value)}
                  >
                  </input>
                </div>
                <div className='form-group mb-2'>
                  <label className='form-label'>precio:</label>
                  <input
                  type='text'
                  placeholder='ingrese el precio'
                  className='form-control'
                  value={precio}
                  onChange={(e)=>setPrecio(e.target.value)}
                  >
                  </input>
                </div>
                <button className='btn btn-success' onClick={(e)=> guardarOactualizarServicio(e)}>guardar servicio</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrearServicio

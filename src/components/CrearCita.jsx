import React, { useEffect, useState } from 'react'
import ClienteService from '../services/ClienteService';
import MascotaService from '../services/MascotaService';
import CitaService from '../services/CitaService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CrearCita = () => {
    const [fecha,setFecha]=useState('');
    const [clienteId,setClienteId]=useState('');
    const [mascotaId,setMascotaId]=useState('');
    const [clientes,setClientes]=useState([]);
    const[mascotas,setMascotas]=useState([]);
    const navigate= useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        ClienteService.getAllClientes().then((response)=>{
            setClientes(response.data);
        }).catch(error=>{
            console.log(error)
        })
    },[])

    useEffect(()=>{
        MascotaService.getAllMascota().then((response)=>{
            setMascotas(response.data);
        }).catch(error=>{
            console.log(error)
        })
    },[])

    useEffect(()=>{
        CitaService.getCitaById(id).then((response)=>{
            setFecha(response.data.fecha);
            setClienteId(response.data.clienteId?response.data.clienteId:'');
            setMascotaId(response.data.mascotaId?response.data.mascotaId:'');
        }).catch(error=>{
            console.log(error)
        })
    },[])
    //operaciones
    const  guardarOactualizarCita=(e)=>{
        e.preventDefault();
        const cita={fecha,clienteId,mascotaId}
        if(id){
            console.log(cita)
            CitaService.updateCita(id,cita).then((response)=>{
                navigate('/lista-citas')
            }).catch(error=>{console.log(error)})

        }else{
            CitaService.createCita(cita).then((response)=>{
                navigate('/lista-citas')  
            }).catch(error=>{console.log(error)})
        }

    }

    
  return (
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3'>
                <h1 className='text-center' ></h1>
                <div className='card-body'>
                    <form >
                        <div className='form-group mb-2'>
                            <label className='form-label'>fecha:</label>
                            <input type="date" className='form-control'id="fechaNacimiento" value={fecha}
                            onChange={e=>setFecha(e.target.value)}/>
                        </div>

                        <div className=" form-group mb-3">
                            <label htmlFor="cliente" className="form-label">seleccione cliente:</label>
                            <select
                            className='form-control'
                            id="cliente"
                            value={clienteId}
                            onChange={e=>setClienteId(e.target.value)}
                            >
                                <option value="">Seleccionar cliente</option>
                                {clientes.map(cliente=>(
                                    <option key={cliente.clienteId} value={cliente.clienteId}>
                                        {cliente.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='form-group '>
                            <label className='form-label' htmlFor='mascota'>seleccione mascota:</label>
                            <select id='mascota'
                            className='form-control'
                            value={mascotaId}
                            onChange={e=>setMascotaId(e.target.value)}
                            >
                                <option value="">Seleccionar mascota</option>
                                {mascotas.map(mascota=>(
                                    <option key={mascota.mascotaId} value={mascota.mascotaId}>
                                    {mascota.nombre}
                                </option>
                                ))}

                            </select>

                        </div>
                        <button className='btn btn-success' onClick={(e)=>guardarOactualizarCita(e)}>guardar cita</button>
                        <Link to='/lista-citas'className="btn btn-danger">cancelar</Link>


                    </form>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default CrearCita

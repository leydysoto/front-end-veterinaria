import React, { useEffect, useState } from 'react'
import MascotaService from '../services/MascotaService'
import ClienteService from '../services/ClienteService';
import { Link, useNavigate, useParams} from 'react-router-dom';

const CrearMascota = () => {
  const [nombre, setNombre] = useState('');
  const [especie, setEspecie] = useState('');
  const [raza, setRaza] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [clienteId, setClienteId] = useState('');
  const [clientes, setClientes] = useState([]);
  const navigate =useNavigate();
  const {id}=useParams();
  useEffect(()=>{
    ClienteService.getAllClientes().then(response=>{
      setClientes(response.data);
    }).catch(error=>{
      console.log(error);
    })

  },[])
  //para traer datos de la mascota segun el id
  useEffect(()=>{
    MascotaService.getMascotaById(id).then((response)=>{
      console.log( response.data);
      setNombre(response.data.nombre);
      setEspecie(response.data.especie);
      setRaza(response.data.raza);
      setFechaNacimiento(response.data.fechaNacimiento);
      setClienteId(response.data.clienteId ? response.data.clienteId: ''); 

    }).catch(error=>{
      console.log(error);
    })
  },[])

  const guardarOactualizarMascota=(e)=>{
    e.preventDefault();
    const mascota={nombre,especie,raza,fechaNacimiento,clienteId};
    if(id){
      MascotaService.updateMascota(id, mascota).then((response)=>{
        console.log(response.data);
        navigate('/listaMascota')
      }).catch(error=>{console.log(error)})

    }else{
      MascotaService.createMascota(mascota).then((response)=>{
        console.log(response.data);
        navigate('/listaMascota')
      }).catch(error=>{console.log(error)})
    }
     
  }
  return (
    <div>
      <div className='container mt-2'>
        <div className='row '>
          <div className='card col-md-6 offset-md-3 '>
            <h2 className='text-center'>agregar mascota</h2>
            <div className='card-body'>
              <form >
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="especie" className="form-label">
                    Especie:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="especie"
                    value={especie}
                    onChange={e => setEspecie(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="raza" className="form-label">
                    Raza:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="raza"
                    value={raza}
                    onChange={e => setRaza(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="fechaNacimiento" className="form-label">
                    Fecha de Nacimiento:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="fechaNacimiento"
                    value={fechaNacimiento}
                    onChange={e => setFechaNacimiento(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cliente" className="form-label">
                    Dueño:
                  </label>
                  <select
                    className="form-control"
                    id="cliente"
                    value={clienteId}
                    onChange={e => setClienteId(e.target.value)}
                  >
                    <option value="">Seleccionar Dueño</option>
                    {clientes.map(cliente => (
                      <option key={cliente.clienteId} value={cliente.clienteId}>
                        {cliente.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <button className='btn btn-success' onClick={(e)=> guardarOactualizarMascota(e)}>guardar Mascota</button>
                        &nbsp;&nbsp;
                        <Link to='/' className='btn btn-danger'>cancelar</Link>
              </form>
              </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default CrearMascota

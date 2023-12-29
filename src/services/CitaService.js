const CITA_RUTA="https://localhost:7126/api/Cita"
import axios from "axios"
class CitaServicie{
    getAllCitas(){
        return axios.get(CITA_RUTA)
    }
    getCitaById(citaId){
        return axios.get(CITA_RUTA+'/'+citaId)

    }
    createCita(cita){
        return axios.post(CITA_RUTA,cita)
    }
    updateCita(citaId,cita){
        return axios.put(CITA_RUTA+'/'+citaId, cita)
    }

}export default new CitaServicie
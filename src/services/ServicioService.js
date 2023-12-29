const SERVICIOS_URL="https://localhost:7126/api/Servicio";
import axios from "axios";
class ServicioService{
    getAllServicios(){
        return axios.get(SERVICIOS_URL)
    }
    createServicio(servicio){
        return axios.post(SERVICIOS_URL,servicio);
    }
    getServicioById(servicioId){
        return axios.get(SERVICIOS_URL+'/'+servicioId)
    }
    updateServicio(servicioId,servicio){
        return axios.put(SERVICIOS_URL+'/'+servicioId,servicio)
    }

}
export default new ServicioService();
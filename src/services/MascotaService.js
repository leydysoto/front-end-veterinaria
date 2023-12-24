const MASCOTA_URL="https://localhost:7126/api/Mascota";
import axios from 'axios';
class MascotaService{
    getAllMascota() {
        return axios.get(MASCOTA_URL)
    }
    createMascota(mascota){
        return axios.post(MASCOTA_URL,mascota);
    }
    getMascotaById(mascotaId){
        return axios.get(MASCOTA_URL+'/'+mascotaId);
    }
    updateMascota(mascotaId, mascota){
        return axios.put(MASCOTA_URL+'/'+mascotaId, mascota);
    }
    
}
export default new MascotaService();
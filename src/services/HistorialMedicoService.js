const HISTORIALMEDICO_URL="https://localhost:7126/api/HistorialMedico";
import axios from 'axios';
class HistorialMedicoService{
    getAllHistorialMedico(){
        return axios.get(HISTORIALMEDICO_URL)
    }

}
export default new HistorialMedicoService();
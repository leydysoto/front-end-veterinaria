const CLIENTE_URL="https://localhost:7126/api/Cliente";
import axios from 'axios';
class ClienteService{
    getAllClientes() {
        return axios.get(CLIENTE_URL)
    }
    createCliente(cliente){
        return axios.post(CLIENTE_URL,cliente);
    }
    getClienteById(clienteId){
        return axios.get(CLIENTE_URL+'/'+clienteId);
    }
    updateCliente(clienteId, cliente){
        return axios.put(CLIENTE_URL+'/'+clienteId, cliente);
    }
    
}
export default new ClienteService();
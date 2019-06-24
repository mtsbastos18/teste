import axios from 'axios'


export const http = axios.create({
    baseURL: 'http://viacep.com.br/ws/',
})


export default {
    buscarCep:(cep) => {
        return http.get(cep +'/json')
    }
}
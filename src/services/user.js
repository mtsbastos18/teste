import { http } from './config'

export default {
    login:(user) => {
        return http.post('sessions', user)
    },

    getById:(id) => {
        return http.get('products/'+id)
    }
}
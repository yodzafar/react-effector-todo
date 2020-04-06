import axios from 'axios'

export const api = async (url, method, headers = {}, data) => {
    const config = {
        method: method,
        url: url,
        data: data,
        headers: headers
    }
    return axios(config)
}
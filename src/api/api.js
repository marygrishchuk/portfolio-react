import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://portfolio-gmail-server.herokuapp.com/'
})

export const sendMessageAPI = {
    sendMessage(name, email, messageText) {
        return instance.post(`sendMessage`, {name, email, messageText})
    }
}
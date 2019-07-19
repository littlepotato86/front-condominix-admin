import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:7000/',
  json: true
})

export default {
  async execute (method, resource, data) {
    return client({
      method,
      url: resource,
      data,  
    }).then(req => {
      return req.data
    })
  },
  async getRooms () {
    return await this.execute('get', '/rooms')
  },
  getRoom (id) {
    return this.execute('get', `/rooms/${id}`)
  },
  createRoom (data) {
    return this.execute('post', '/rooms', data)
  },
  updateRoom (id, data) {
    return this.execute('put', `/rooms/${id}`, data)
  },
  deleteRoom (id) {
    return this.execute('delete', `/rooms/${id}`)
  }
}
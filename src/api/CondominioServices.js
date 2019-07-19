import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:3000/api',
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
  async getCondominios () {
    return await this.execute('get', '/buildings')
  },
  getCondominio (id) {
    return this.execute('get', `/buildings/${id}`)
  },
  async createCondominio (data) {
    return this.execute('post', '/buildings', data)
  },
  updateCondominio (id, data) {
    return this.execute('put', `/buildings/${id}`, data)
  },
  deleteCondominio(id) {
    return this.execute('delete', `/buildings/${id}`)
  }
}
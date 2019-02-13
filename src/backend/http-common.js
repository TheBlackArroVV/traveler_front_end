import axios from 'axios'

const API_URL = process.env.API_URL || 'http://localhost:3000/api/v1'

export default axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${$session.get('jwt')}`
  }
})

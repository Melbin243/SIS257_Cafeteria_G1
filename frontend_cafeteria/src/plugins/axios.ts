import Axios from 'axios'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_ENDPOINT,
  headers: { 
    'Content-type': 'application/json',
    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImlhdCI6MTcwMDY0NzAyNiwiZXhwIjoxNzAwNjQ3MDg2fQ.p96277cj0ptzRQoR5LVBLzYqmz1hGEj7QHf2tecHhU4"
  }
})

export default axios

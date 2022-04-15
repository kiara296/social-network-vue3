import axios from 'axios'


export default () => {
    /* creamos una conexion con nuestro backend, para poder pegar a cada endponit */
  return axios.create({
    baseURL: `http://localhost:3001/`
  
  })
}
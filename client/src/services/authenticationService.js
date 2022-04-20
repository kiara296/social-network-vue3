import Api from './api'

export default {
    /* le va pegar al register endponit, le va a hacer un post request al register enpoint y va a usar las credenciales que llegan desde el front  */
    register (credentials) {
      return Api().post('register', credentials)
    },
  catalog () {
      Api().get('catalog').then(response => {
      response.allBooks
    })

  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}
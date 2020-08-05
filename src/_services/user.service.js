import Axios from 'axios'

export function register (user) {
  return Axios({
    method: 'post',
    baseURL: 'http://adfl.eba-mxzsvfqe.us-east-1.elasticbeanstalk.com/auth/registration/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(user)
  }).then(response => {
    return response
  }).catch(e => console.log('ocurrio un error ' + e))
}

export const validateAccount = (token) => {
  return Axios({
    method: 'post',
    baseURL: 'http://adfl.eba-mxzsvfqe.us-east-1.elasticbeanstalk.com/auth/registrarion/verify-email/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      key: token
    }
  })
}

export const login = (user) => {
  return Axios({
    method: 'post',
    baseURL: 'http://adfl.eba-mxzsvfqe.us-east-1.elasticbeanstalk.com/auth/login/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(user)
  })
}

import axios from 'axios'
import config from '@/secrets/config.json'

const fetch = () => {
  return axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/' + config.iss + '/onboarding',
    headers: {
      'accept': 'application/json',
      'Authorization': `bearer ${sessionStorage['rto-token']}`
    }
  })
}

export default {
  putRtoUser (model) {
    return fetch().put(`/v1/RTOs/${model.rtoId}/users?solutionId=${model.solutionId}`, {
      "name": model.name,
      "userId": model.userId,
      "roles": [
        model.roleId
      ]
    })
  },

  delRtoUser (model) {
    return fetch().delete(`/v1/RTOs/${model.rtoId}/users/${model.userDocId}?solutionId=${model.solutionId}`)
  },

}

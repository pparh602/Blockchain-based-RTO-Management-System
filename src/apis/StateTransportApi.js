import axios from 'axios'
import config from '@/secrets/config.json'

const fetch = () => {
  return axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/' + config.iss + '/onboarding',
    headers: {
      'accept': 'application/json',
      'Authorization': `bearer ${sessionStorage['admin-token']}`
    }
  })
}

export default {
  getSolutionById (solutionId) {
    return fetch().get('/v1/solutions', {
      params: {
        "solutionId": solutionId
      }
    })
  },

  searchAllUsersForRtoId (model) {
    return fetch().get('/v1/search/users', {
      params: {
        "solutionId": model.solutionId,
        "RTOId": model.RTOId,
        "count": model.count
      }
    })
    .catch(err => {
      console.log(err)
      var dummy = {}
      dummy.data = {}
      return dummy
    })
  },
  
  getSolutionRoles (model) {
    return fetch().get('/v1/roles', {
      params: {
        "solutionId": model.solutionId
      }
    })
  },

  putRtos (model) {
    return fetch().put(`/v1/RTOs?solutionId=${model.solutionId}`, {
      "name": model.name,
      "solutionId": model.solutionId,
      "blockchainUserMode": "user",
      "walletManagerURL": "https://pbsa-prod.us-south.containers.mybluemix.net/d06f7015-3474-40ac-ae5d-d77f220fa068/onboarding"
    })
  },

  searchAllRtos (model) {
    return fetch().get('/v1/search/RTOs', {
      params: {
        "solutionId": model.solutionId
      }
    })
  },

  postRtoAdmin (model) {
    return fetch().post(`/v1/RTOs/${model.RTOId}/administrators?solutionId=${model.solutionId}`, {
      "RTOAdministrators": [
        model.adminEmailId
      ],
    })
  },

  deleteRtoAdmin (model) {
    return fetch().delete(`/v1/RTOs/${model.RTOId}/administrators/${model.adminId}?solutionId=${model.solutionId}`)
  }
}

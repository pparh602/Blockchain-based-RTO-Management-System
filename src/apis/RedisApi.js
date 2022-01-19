import axios from 'axios'

const fetch = () => {
  return axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
      'accept': 'application/json'
    }
  })
}

export default {
  postUserTovehicleownerMapping (user, vehicleowner) {
    return fetch().post('/aclusertovehicleowner', {
      "user": user,
      "vehicleowner": vehicleowner
    })
  },

  getUserTovehicleownerMapping (user) {
    return fetch().get(`/aclusertovehicleowner/${user}`)
  },

  postvehicleownerToUserMapping (vehicleownerId, users) {
    return fetch().post('/aclvehicleownertouser', {
      "vehicleownerId": vehicleownerId,
      "users": users
    })
  },

  getvehicleownerToUserMapping (vehicleownerId) {
    return fetch().get(`/aclvehicleownertouser/${vehicleownerId}`)
  },
  
  patchUserTovehicleownerMapping (userId, vehicleownerId) {
    return fetch().patch('/aclusertovehicleowner', {
      "userId": userId,
      "vehicleownerId": vehicleownerId
    })
  },
  
  patchvehicleownerToUserMapping (vehicleownerId, userId) {
    return fetch().patch('/aclvehicleownertouser', {
      "vehicleownerId": vehicleownerId,
      "userId": userId
    })
  },
}

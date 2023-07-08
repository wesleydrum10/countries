import api from '../../api'

/* eslint-disable import/no-anonymous-default-export */
function list() {
  return new Promise((resolve, reject) => {
    api
      .get('/v3.1/all')
      .then(({data}) => resolve(data))
      .catch((err) => reject(console.error('Este é o erro', err)))
  })
}

function findName(name) {
  return new Promise((resolve, reject) => {
    api
      .get(`/v3.1/name/${name}`)
      .then(({data}) => resolve(data))
      .catch((err) => reject(console.error(err)))
  })
}

function findCode(code) {
  return new Promise((resolve, reject) => {
    api
      .get(`/v3.1/alpha/${code}`)
      .then(({data}) => resolve(data))
      .catch((err) => reject(console.error(err)))
  })
}

function findRegion(region) {
  return new Promise((resolve, reject) => {
    api
      .get(`/v3.1/region/${region}`)
      .then(({data}) => resolve(data))
      .catch((err) => reject(console.error(err)))
  })
}

export default { list, findName, findCode, findRegion }

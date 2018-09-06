import axios from 'axios'

let url = 'https://eventify-api.azurewebsites.net'
url = 'http://localhost:3001'

export async function getVouchers(links, token = null) {
  let splitLinks = links.split('\n')
  splitLinks = splitLinks.filter(link => link.length > 0).map(link => link.trim())
  let codes = await getBarcodes(splitLinks, token)
  return codes
}

function getBarcodes(links, token) {
  return new Promise((resolve, reject) => {
    let headers = {}
    if (token) {
      headers.Authorization = `Bearer ${token.tokenObj.id_token}`
    }
    axios.post(`${url}/api/tickets/`,
      {
        'barcodes': links,
      }, {
        'headers': headers
      }).then(function (response) {
        resolve(response.data)
      }).catch(function (error) {
        console.log(error)
        reject(error)
      })
  })
}

export function getBarcodeList(token) {
  return new Promise((resolve, reject) => {
    const headers = {
      "Authorization": `Bearer ${token}`
    }
    axios.get(`${url}/api/tickets/`, { 'headers': headers }).then(function (response) {
        resolve(response.data)
      }).catch(function (error) {
        console.log(error)
        reject(error)
      })
  })
}


export function ping() {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        resolve()
      }).catch(error => {
        reject()
      })
  })
}

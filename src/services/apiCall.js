import axios from 'axios'

export async function getVouchers (links) {
  let splitLinks = links.split('\n')
  splitLinks = splitLinks.filter(link => link.length > 0).map(link => link.trim())
  let codes = await getBarcodes(splitLinks)
  return codes
}

function getBarcodes (links) {
  return new Promise((resolve, reject) => {
    axios.post('https://eventifyapi.azurewebsites.net/api/barcodes-and-pins/',
      {
        'barcodes': links
      }).then(function (response) {
        resolve(response.data)
      }).catch(function (error) {
        console.log(error)
        reject(error)
      })
  })
}

export function ping() {
  return new Promise((resolve, reject) => {
    axios.get('https://eventifyapi.azurewebsites.net/')
      .then(response => {
        resolve()
      }).catch(error => {
        reject()
      })
  })
}

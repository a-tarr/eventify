import axios from 'axios';

export async function getVouchers(links) {
  let result = {};
  let splitLinks = links.split('\n');

  let codes = await getBarcodes(splitLinks);
  return codes;
}

function getBarcodes(links) {
  return new Promise((resolve, reject) => {
    axios.post('api/barcodes-and-pins/',
    {
      "barcodes": links
    })
    .then(function (response) {
      resolve(response.data);
    })
    .catch(function (error) {
      console.log(error);
      reject();
    });
  })
}
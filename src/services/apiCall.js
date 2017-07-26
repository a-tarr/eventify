import axios from 'axios';

export function getVouchers(links) {
  let result = {};
  let splitLinks = links.split('\n');


  return new Promise(async resolve => {
    let codes = await getBarcodes(splitLinks);
    let success = await scrapeForPins(splitLinks);
    let pins = await getPins();
    let objList = [];
    for (let i = 0; i < codes.length; i++) {
      let obj = {};
      obj['barcode'] = codes[i];
      obj['pin'] = pins[i];
      objList.push(obj);
    }
    resolve(objList);
  })
}

function getBarcodes(links) {
  return new Promise(resolve => {
    axios.post('http://eventifyapi.azurewebsites.net/api/barcodes/codes',
    {
      "barcodes": links
    })
    .then(function (response) {
      resolve(response.data);
    })
    .catch(function (error) {
      console.log(error);
      resolve();
    });
  })
}

function scrapeForPins(links) {
  return new Promise(resolve => {
    axios.post('http://eventifyapi.azurewebsites.net/api/barcodes/pins',
    {
      "barcodes": links
    })
    .then(function (response) {
      resolve();
    })
    .catch(function (error) {
      console.log(error);
      resolve();
    });
  })
}

function getPins() {
  return new Promise(resolve => {
    axios.get('http://eventifyapi.azurewebsites.net/api/ocr')
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
    });
  })
}
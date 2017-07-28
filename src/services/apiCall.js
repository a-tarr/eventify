import axios from 'axios';

export function getVouchers(links) {
  let result = {};
  let splitLinks = links.split('\n');


  return new Promise(resolve => {
    let codes;
    Promise.all([getBarcodes(splitLinks), scrapeForPins(splitLinks)]).then(async values => {
      codes = values[0];
      let pins = await getPins();
      let objList = [];
      for (let i = 0; i < codes.length; i++) {
        let obj = {};
        obj['barcode'] = codes[i];
        obj['pin'] = pins[i];
        objList.push(obj);
      }
      resolve(objList);
    });
  })
}

function getBarcodes(links) {
  return new Promise((resolve, reject) => {
    axios.post('https://eventifyapi.azurewebsites.net/api/barcodes/codes',
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

function scrapeForPins(links) {
  return new Promise((resolve, reject) => {
    axios.post('https://eventifyapi.azurewebsites.net/api/barcodes/pins',
    {
      "barcodes": links
    })
    .then(function (response) {
      resolve();
    })
    .catch(function (error) {
      console.log(error);
      reject();
    });
  })
}

function getPins() {
  return new Promise((resolve, reject) => {
    axios.get('https://eventifyapi.azurewebsites.net/api/ocr')
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject();
    });
  })
}
export const FETCH_IMMEDIATE_BARCODES = 'FETCH_IMMEDIATE_BARCODES';
export const FETCH_IMMEDIATE_BARCODES_COMPLETE = 'FETCH_IMMEDIATE_BARCODES_COMPLETE';
export const FETCH_BARCODES_LOGGED_IN = 'FETCH_BARCODES_LOGGED_IN';
export const FETCH_BARCODES_LOGGED_IN_COMPLETE = 'FETCH_BARCODES_LOGGED_IN_COMPLETE';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';
export const GET_BARCODE_LIST_COMPLETED = 'GET_BARCODE_LIST_COMPLETED';
export const FETCH_BARCODE_LIST = 'FETCH_BARCODE_LIST';

export function fetchImmediateBarcodes() {
  return { 
    type: FETCH_IMMEDIATE_BARCODES
  };
}

export function fetchImmediateBarcodesComplete(barcodes) {
  return { 
    type: FETCH_IMMEDIATE_BARCODES_COMPLETE,
    barcodes: barcodes
  };
}

export function fetchBarcodesLoggedIn() {
  return { 
    type: FETCH_BARCODES_LOGGED_IN
  };
}

export function fetchBarcodesLoggedInComplete(barcodes) {
  return { 
    type: FETCH_BARCODES_LOGGED_IN_COMPLETE,
    barcodes: barcodes
  };
}

export function loggedIn(object) {
  return { 
    type: LOGGED_IN,
    user: object
  };
}

export function loggedOut() {
  return { type: LOGGED_OUT };
}

export function getBarcodeListCompleted(barcodes) {
  return { 
    type: GET_BARCODE_LIST_COMPLETED,
    payload: barcodes
  }
}

export function fetchBarcodeList(isFetching) {
  return {
    type: FETCH_BARCODE_LIST,
    payload: isFetching
  }
}
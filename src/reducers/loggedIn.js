import * as actions from '../actions';

const initialState = {
  loggedIn: false,
  currentUser: {},
  savedBarcodes: [],
  fetchingSavedBarcodes: false
}

export default function loggedIn(state = initialState, action) {
  switch (action.type) {
    case actions.LOGGED_IN:
      return Object.assign({}, state, {
        loggedIn: true,
        currentUser: action.user
      })
    case actions.LOGGED_OUT:
      return Object.assign({}, state, initialState)
    case actions.FETCH_BARCODE_LIST:
      return {...state, fetchingSavedBarcodes: action.payload }
    case actions.GET_BARCODE_LIST_COMPLETED:
      const barcodes = action.payload.map(barcode => {
        return { 
          barcode: barcode.Barcode, 
          pin: barcode.Pin, 
          used: barcode.Used,
          createdDate: barcode.CreatedDate
        }
      });
      return {...state, savedBarcodes: barcodes }
    default:
      return state;

    
  }
}
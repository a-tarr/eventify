import * as actions from '../actions';

const initialState = {
  fetchingImmediate: false,
  barcodes: []
}

export default function fetch(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_IMMEDIATE_BARCODES:
      return Object.assign({}, state, {
        fetchingImmediate: true
      })
    case actions.FETCH_IMMEDIATE_BARCODES_COMPLETE:
      return {...state,
        fetchingImmediate: false,
        barcodes: action.barcodes
      }
    default:
      return state;
  }
}
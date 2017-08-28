import * as actions from '../actions';

const initialState = {
  modalType: null
}

export default function modal(state = initialState, action) {
  switch (action.type) {
    case actions.SHOW_MODAL:
      return {
        modalType: action.modal
      }
    case actions.HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}
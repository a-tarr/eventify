export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export function showModal(modal) {
  return { type: SHOW_MODAL, modal};
}

export function hideModal() {
  return { type: HIDE_MODAL };
}
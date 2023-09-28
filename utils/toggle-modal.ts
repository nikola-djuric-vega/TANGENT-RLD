export enum ModalState {
  CLOSE = 'remove',
  OPEN = 'add',
}

export const toggleModal = (state: ModalState) => {
  document.body.classList[state]('modal-open')
}

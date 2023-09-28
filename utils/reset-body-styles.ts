import { ModalState, toggleModal } from './toggle-modal'

export const resetBodyStyles = () => {
  document.body.style.overflow = 'auto'
  toggleModal(ModalState.CLOSE)
}

import { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import S from './modal.module.css'

interface ModalProps {
  children: ReactNode
}

function ModalPotal({ children }: ModalProps) {
  const modalRoot = document.getElementById('modal-root')

  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <div className={S.wrapper}>{children}</div>,
    modalRoot,
  )
}

export default ModalPotal

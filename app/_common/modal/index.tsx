import { ReactNode, useState } from 'react'
import ModalPotal from './ModalPortal'
import S from './modal.module.css'

interface ModalProps {
  open?: string
  children: ReactNode
  title?: string
  subTitle?: string
  buttonTitle?: string
}

function Modal({ open, children, title, subTitle, buttonTitle }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={openModal} className={S.buttonWrapper}>
        {open ? open : '열기'}
      </button>
      {isOpen && (
        <ModalPotal>
          <div className={S.inWrapper}>
            <div className={S.titleWrapper}>
              <span className={S.title}>{title}</span>
              <p className={S.subTitle}>{subTitle}</p>
            </div>
            {children}
            <button className={S.buttonWrapper}>{buttonTitle}</button>
            <div className={S.closeBtnWrapper}>
              <button onClick={closeModal} className={S.closeWrapper}>
                X
              </button>
            </div>
          </div>
        </ModalPotal>
      )}
    </>
  )
}

export default Modal

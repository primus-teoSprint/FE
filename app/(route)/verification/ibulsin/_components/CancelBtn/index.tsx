'use client'

import { useRouter } from 'next/navigation'
import { MdChevronLeft } from 'react-icons/md'
import S from './index.module.css'

function CancelBtn() {
  const router = useRouter()

  const handleClickCancelBtn = () => {
    const verify = confirm(
      '정말로 작성을 그만하시겠습니까? 작성한 문항들이 사라집니다.',
    )

    if (verify) {
      router.push('/main')
    }
  }

  return (
    <button
      className={S.cancel_btn}
      onClick={handleClickCancelBtn}
      type="button"
    >
      <MdChevronLeft size={20} />
    </button>
  )
}

export default CancelBtn

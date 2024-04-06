'use client'

import React, { useState } from 'react'
import S from './index.module.css'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import MoreExplainToggle from '../MoreExplainToggle'

function MoreExplainBtn({ type }: { type: string }) {
  const [isHover, setIsHover] = useState(false)

  const handleMouseOver = () => {
    setIsHover(true)
  }
  const handleMouseOut = () => {
    setIsHover(false)
  }

  return (
    <div className={S.question_icon_container}>
      <BsFillQuestionCircleFill
        className={S.question_icon}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      {isHover && <MoreExplainToggle type={type} />}
    </div>
  )
}

export default MoreExplainBtn

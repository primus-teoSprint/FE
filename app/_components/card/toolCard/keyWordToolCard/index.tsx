'use client'

import { defaultFadeInUpVariants } from '@/app/_constants/motion'
import { ToolCardProps } from '@/app/_types/tool'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import CommonS from '../toolCard.module.css'
import S from './keyWordToolCard.module.css'

function KeyWordTool({
  toolId,
  toolImg,
  title,
  subTitle,
  keyword,
}: ToolCardProps) {
  return (
    <Link href={`/toolDetail/${toolId}`}>
      <motion.div
        variants={defaultFadeInUpVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={S.wrapper}
      >
        <div className={CommonS.rowWrapper}>
          <div className={CommonS.imgWrapper}>
            <Image
              src={toolImg}
              alt="아이디어 툴 이미지"
              width={60}
              height={60}
            />
          </div>
          <div className={CommonS.columnWrapper}>
            <span className={S.title}>{title}</span>
            <p className={CommonS.subTitle}>{subTitle}</p>
          </div>
        </div>

        <div className={S.marginWrapper}>
          <div className={CommonS.companyWrapper}>{keyword}</div>
        </div>
      </motion.div>
    </Link>
  )
}

export default KeyWordTool

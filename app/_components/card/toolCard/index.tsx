'use client'
import { defaultFadeInRightVariants } from '@/app/_constants/motion'
import { ToolCardProps } from '@/app/_types/tool'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import S from './toolCard.module.css'

function ToolCard({
  toolImg,
  title,
  subTitle,
  description,
  company,
  toolId,
}: ToolCardProps) {
  return (
    <Link href={`/toolDetail/${toolId}`}>
      <motion.div
        variants={defaultFadeInRightVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={S.wrapper}
      >
        <div className={S.rowWrapper}>
          <div className={S.imgWrapper}>
            <Image
              src={toolImg}
              alt="아이디어 툴 이미지"
              width={60}
              height={60}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </div>

          <div className={S.columnWrapper}>
            <span className={S.title}>{title}</span>
            <p className={S.subTitle}>{subTitle}</p>
          </div>
        </div>
        <div className={S.descriptionWrapper}>
          <span className={S.description}>{description}</span>
        </div>

        <div className={S.companyWrapper}>
          {company?.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt="실제 사례 이미지"
              width={50}
              height={50}
            />
          ))}
        </div>
      </motion.div>
    </Link>
  )
}

export default ToolCard

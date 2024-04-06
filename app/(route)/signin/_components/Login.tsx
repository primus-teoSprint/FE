'use client'

import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { RiKakaoTalkFill } from 'react-icons/ri'
import rocketLogo from '../../../_assets/_images/rocketLogo.png'
import styles from '../signin.module.css'

function Login() {
  const router = useRouter()

  const handleClickNonMember = () => {
    router.push('/')
  }
  const controls = useAnimation()

  const animateDiagonal = async () => {
    await controls.start({
      x: '25px',
      y: '-28px',
      transition: { duration: 5 },
    })
    await controls.start({
      x: '-20px',
      y: '-10px',
      transition: { duration: 5 },
    })
    animateDiagonal()
  }

  useEffect(() => {
    animateDiagonal()
  }, [])

  const handleClicksignin = () => {
    router.push('/')
  }

  return (
    <div className={styles.background}>
      <div className={styles.wordwrap}>
        <p className={styles.largeword}>안녕하세요.</p>
        <p className={styles.largeword}>프리무스입니다.</p>
        <p className={styles.smallword}>
          서비스 이용을 위해서 로그인 해주세요.
        </p>
      </div>

      <motion.div
        className={styles.img}
        animate={controls}
        style={{ position: 'relative' }}
      >
        <Image
          src={rocketLogo}
          alt="로켓 로고"
          layout="responsive"
          width={400}
          height={400}
        />
      </motion.div>

      <div className={styles.kakaologin} onClick={handleClicksignin}>
        <RiKakaoTalkFill className={styles.icon} /> 카카오로 시작하기
      </div>
      <div className={styles.nonmember} onClick={handleClickNonMember}>
        비회원으로 둘러보기
      </div>
    </div>
  )
}

export default Login

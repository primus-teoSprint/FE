'use client'

import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { RiKakaoTalkFill } from 'react-icons/ri'
import rocketLogo from '../../../_assets/_images/rocketLogo.png'
import styles from '../Signin.module.css'

function Login() {
  const router = useRouter()

  const handleClickNonMember = () => {
    router.push('/main')
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

  const handleLogin = () => {
    const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID
    const KAKAO_REDIRECT_URL = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL
    const kakadoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`

    window.location.href = kakadoAuthUrl
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
      {/* <form method="GET" action="/api/signincheck">
        <button className={styles.kakaologin} type="submit">
          <RiKakaoTalkFill className={styles.icon} /> 카카오로 시작하기
        </button>
      </form> */}
      <button className={styles.kakaologin} type="button" onClick={handleLogin}>
        <RiKakaoTalkFill className={styles.icon} /> 카카오로 시작하기
      </button>
      <div className={styles.nonmember} onClick={handleClickNonMember}>
        비회원으로 둘러보기
      </div>
    </div>
  )
}

export default Login

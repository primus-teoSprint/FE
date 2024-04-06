'use client'

import rocketLogo from '../../../_assets/_images/rocketLogo.png'
import Image from 'next/image'
import styles from '../Signin.module.css'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { useRouter } from 'next/navigation'

function Login() {
  const router = useRouter()

  const handleClickNonMember = () => {
    router.push('/main')
  }

  const handleClicksignin = () => {
    router.push('/main')
  }

  return (
    <div className={styles.background}>
      <div className={styles.wordwrap}>
        <p className={styles.largeword}>안녕하세요</p>
        <p className={styles.largeword}>프리무스입니다</p>
        <p className={styles.smallword}>서비스 이용을 위해서 로그인 해주세요</p>
      </div>

      <div className={styles.img}>
        <Image
          src={rocketLogo}
          alt="로켓로고"
          layout="responsive"
          width={370}
          height={370}
        />
      </div>

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

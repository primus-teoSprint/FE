'use client'

import styles from '../Onboard.module.css'
import rocketLogo from '../../../_assets/_images/rocketLogo.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Onboarding() {
  const router = useRouter()

  const handleClickSignin = () => {
    router.push('/signin')
  }

  const handleCilckSignup = () => {
    router.push('/singup')
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.topmargin}>
        <p className={styles.smallword}>아이디어 검증 툴 서비스</p>
        <p className={styles.largeword}>프리무스</p>
      </div>
      <div style={{ width: '370px', height: '370px' }}>
        <Image
          src={rocketLogo}
          alt="로켓로고"
          layout="responsive"
          width={370}
          height={370}
        />
      </div>
      <div className={styles.topmargin}>
        <div className={styles.intosignin} onClick={handleClickSignin}>
          아이디어 검증하러 가기
        </div>
        <div className={styles.flex}>
          <div className={`${styles.smallword} ${styles.gray}`}>
            아직 회원이 아니시라면?
          </div>
          <div
            className={`${styles.smallword} ${styles.leftmargin}`}
            onClick={handleCilckSignup}
          >
            회원가입
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onboarding

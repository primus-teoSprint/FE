'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import rocketLogo from '../../../_assets/_images/rocketLogo.png'
import styles from '../Onboard.module.css'

function Onboarding() {
  const router = useRouter()

  const handleClickMain = () => {
    router.push('/main')
  }

  const handleCilckSignup = () => {
    router.push('/signin')
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.topmargin}>
        <p className={styles.smallword}>아이디어 검증 툴 서비스</p>
        <p className={styles.largeword}>프리무스</p>
      </div>
      <div className={styles.img}>
        <Image
          src={rocketLogo}
          alt="로켓 로고"
          layout="responsive"
          width={430}
          height={430}
        />
      </div>

      <div className={styles.intosignin} onClick={handleClickMain}>
        아이디어 검증하러 가기
      </div>
      <div className={styles.flex}>
        <div className={`${styles.smallword} ${styles.nonMember}`}>
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
  )
}

export default Onboarding

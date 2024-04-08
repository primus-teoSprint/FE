import Image from 'next/image'
import styles from '../../(route)/signin/Signin.module.css'
import rocketLogo from '../../_assets/_images/rocketLogo.png'
import S from './loading.module.css'

function Loading() {
  return (
    <div className={S.wrapper}>
      <h1>Loading ...</h1>
      <div className={styles.img}>
        <Image
          src={rocketLogo}
          alt="로켓 로고"
          layout="responsive"
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}

export default Loading

import Image from 'next/image'
import Link from 'next/link'
import logo from '../../_assets/_images/logo.png'
import S from './nav.module.css'

//TODO: 사용자 프로필 이미지 가져오기
function Nav() {
  return (
    <div className={S.nav}>
      <Link href="/main">
        <Image src={logo} alt="로고" width={100} height={100} />
      </Link>

      <Link href="/mypage">
        <div className={S.userProfileWrapper}>
          {/* <Image
            src="https://github.com/primus-teoSprint/FE/assets/63100352/b9d091d3-628e-4c16-a609-68b9e0acc3e4"
            alt="사용자 프로필"
            width={25}
            height={25}
          /> */}
        </div>
      </Link>
    </div>
  )
}

export default Nav

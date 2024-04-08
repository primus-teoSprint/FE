'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '../../_assets/_images/logo.png'
import S from './nav.module.css'
import { useRouter } from 'next/navigation'

//TODO: 사용자 프로필 이미지 가져오기
function Nav() {
  const router = useRouter()
  const accessToken = localStorage.getItem('accessToken')

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    location.reload()
  }
  const handleLogin = () => {
    router.push('/signin')
  }

  return (
    <div className={S.nav}>
      <Link href="/main">
        <Image src={logo} alt="로고" width={100} height={100} />
      </Link>
      {accessToken ? (
        <button className={S.btn} type="button" onClick={handleLogout}>
          로그아웃
        </button>
      ) : (
        <button className={S.btn} type="button" onClick={handleLogin}>
          로그인
        </button>
      )}
    </div>
  )
}

export default Nav

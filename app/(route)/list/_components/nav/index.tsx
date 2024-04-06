'use client'
import { useRouter } from 'next/navigation'
import { GoArrowLeft } from 'react-icons/go'
import S from './nav.module.css'

function Nav({ title }: { title: string }) {
  const router = useRouter()

  return (
    <nav className={S.nav}>
      <button onClick={() => router.back()}>
        <GoArrowLeft />
      </button>
      <span className={S.title}>{title}</span>
      &nbsp;
    </nav>
  )
}

export default Nav

import { useEffect, useRef } from 'react'
import styles from '../Onboard.module.css'

function WatchWord({ handleView }: { handleView: any }) {
  const animationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animationend = () => {
      handleView(false)
    }

    animationRef.current?.addEventListener('animationend', animationend)

    return () => {
      animationRef.current?.removeEventListener('animationend', animationend)
    }
  }, [])
  return (
    <div className={styles.wordwrap} ref={animationRef}>
      <p className={styles.word}>당신의 아이디어가</p>
      <p className={styles.word}>로켓처럼 성장하도록</p>
    </div>
  )
}

export default WatchWord

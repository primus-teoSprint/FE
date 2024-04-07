import { useEffect, useRef } from 'react'
import styles from '../Onboard.module.css'

function WatchWord({
  handleView,
  firstText = '당신의 아이디어가',
  twoText = '로켓처럼 성장하도록.',
  onAnimationEnd,
}: {
  handleView: (arg: boolean) => void
  firstText?: string
  twoText?: string
  onAnimationEnd?: () => void
}) {
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

  useEffect(() => {
    const timer = setTimeout(() => {
      {
        onAnimationEnd && onAnimationEnd()
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleAnimationEnd = () => {
    onAnimationEnd && onAnimationEnd()
  }

  return (
    <div
      className={styles.wordwrap}
      ref={animationRef}
      onAnimationEnd={handleAnimationEnd}
    >
      <p className={styles.word}>{firstText}</p>
      <p className={styles.word}>{twoText}</p>
    </div>
  )
}

export default WatchWord

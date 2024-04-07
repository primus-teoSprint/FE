'use client'

import { useState } from 'react'
import Result from '../indicators/_components/result'
import styles from '../onboard/Onboard.module.css'
import WatchWord from '../onboard/_components/WatchWord'

function Loading() {
  const [showWatchWord, setShowWatchWord] = useState(true)

  const handleAnimationEnd = () => {
    setShowWatchWord(false)
  }

  return (
    <>
      {showWatchWord ? (
        <div className={styles.background}>
          <WatchWord
            handleView={setShowWatchWord}
            firstText="아이디어 검증 결과"
            twoText="정리중입니다!"
            onAnimationEnd={handleAnimationEnd}
          />
        </div>
      ) : (
        <Result />
      )}
    </>
  )
}

export default Loading

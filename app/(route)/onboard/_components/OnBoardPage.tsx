'use client'

import { useState } from 'react'
import Onboarding from '../_components/OnBoarding'
import WatchWord from '../_components/WatchWord'
import styles from '../Onboard.module.css'

function OnboardPage() {
  const [showWatchWord, setShowWatchWord] = useState(true)

  return (
    <div className={styles.background}>
      {showWatchWord && <WatchWord handleView={setShowWatchWord} />}
      {!showWatchWord && <Onboarding />}
    </div>
  )
}

export default OnboardPage

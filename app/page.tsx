'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

function Index() {
  const router = useRouter()

  useEffect(() => {
    router.push('/onboard')
  }, [])

  return null
}

export default Index

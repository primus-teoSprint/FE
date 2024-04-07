'use client'

import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

function Callback() {
  const params = useSearchParams()

  useEffect(() => {
    const codeParam = params.get('code')

    if (codeParam) {
      console.log(codeParam)
    }
  }, [params])

  return <div>Redirecting...</div>
}

export default Callback

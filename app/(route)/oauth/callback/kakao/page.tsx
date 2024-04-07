import React, { Suspense } from 'react'
import Callback from './_components/callback'

function page() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <div>
        <Callback />
      </div>
    </Suspense>
  )
}

export default page

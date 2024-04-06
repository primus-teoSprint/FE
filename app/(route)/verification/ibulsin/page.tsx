import React, { Suspense } from 'react'
import Step from './_components/Step'

function page() {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <Step />
      </Suspense>
    </div>
  )
}

export default page

import { Suspense } from 'react'
import Step from './_components/Step'

function page() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Step />
    </Suspense>
  )
}

export default page

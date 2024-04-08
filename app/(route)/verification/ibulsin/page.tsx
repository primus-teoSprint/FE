import Loading from '@/app/_common/loading'
import { Suspense } from 'react'
import Step from './_components/Step'

function page() {
  return (
    <Suspense fallback={<Loading />}>
      <Step />
    </Suspense>
  )
}

export default page

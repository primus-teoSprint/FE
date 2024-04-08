import Loading from '@/app/_common/loading'
import { Suspense } from 'react'
import Callback from './_components/callback'

function page() {
  return (
    <Suspense fallback={<Loading />}>
      <Callback />
    </Suspense>
  )
}

export default page

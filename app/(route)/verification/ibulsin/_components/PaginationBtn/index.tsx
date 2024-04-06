import React from 'react'
import S from './index.module.css'
import cn from 'classnames'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

function PaginationBtn({ step }: { step: number }) {
  const params = useSearchParams()

  const stepParam = params.get('step')

  return (
    <Link
      className={cn(S.btn, {
        [S.darken]: stepParam && parseInt(stepParam) === step,
      })}
      href={`/verification/ibulsin?step=${step}`}
    >
      {step}
    </Link>
  )
}

export default PaginationBtn

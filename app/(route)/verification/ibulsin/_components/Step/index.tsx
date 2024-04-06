'use client'

import React from 'react'
import S from './index.module.css'
import { useSearchParams } from 'next/navigation'
import Step1 from '../Step1'
import Step2 from '../Step2'
import Step3 from '../Step3'
import StepPagination from '../StepPagination'
import CancelBtn from '../CancelBtn'

function Step() {
  const params = useSearchParams()

  const stepParam = params.get('step')

  return (
    <div className={S.main_container}>
      <div className={S.survey_header}>
        <CancelBtn />
        <StepPagination />
        <div className={S.fake}></div>
      </div>
      {stepParam === '1' && <Step1 />}
      {stepParam === '2' && <Step2 />}
      {stepParam === '3' && <Step3 />}
    </div>
  )
}

export default Step

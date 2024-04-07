'use client'

import React from 'react'
import S from './index.module.css'
import ActiveInvestmentItem from '../ActiveInvestmentItem'
import { useRecoilValue } from 'recoil'
import investmentItemAtom from '@/app/_store/atom'

function ActiveInvestmentList() {
  const investmentItem = useRecoilValue(investmentItemAtom)

  return (
    <div className={S.main}>
      {investmentItem.map((item) => {
        return <ActiveInvestmentItem key={item.id} item={item} />
      })}
    </div>
  )
}

export default ActiveInvestmentList

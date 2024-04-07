'use client'

import investmentItemAtom from '@/app/_store/atom'
import { useRecoilValue } from 'recoil'
import ActiveInvestmentItem from '../ActiveInvestmentItem'
import S from './index.module.css'

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

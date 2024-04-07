'use client'

import { investmentItemAtom } from '@/app/_store/atom'
import { useRecoilValue } from 'recoil'
import ActiveInvestmentItem from '../ActiveInvestmentItem'
import S from './index.module.css'

interface Props {
  selectedIndex: number | null
  onSelect: (index: number) => void
}

function ActiveInvestmentList({ selectedIndex, onSelect }: Props) {
  const investmentItem = useRecoilValue(investmentItemAtom)

  return (
    <div className={S.main}>
      {investmentItem.map((item, index) => {
        return (
          <ActiveInvestmentItem
            key={item.id}
            item={item}
            index={index}
            selectedIndex={selectedIndex}
            onSelect={onSelect}
          />
        )
      })}
    </div>
  )
}

export default ActiveInvestmentList

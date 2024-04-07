'use client'

import { ActiveInvestmentItemType, investmentItemAtom } from '@/app/_store/atom'
import { useSetRecoilState } from 'recoil'
import S from './index.module.css'

function ItemAddBtn() {
  const setInvestmentItem = useSetRecoilState(investmentItemAtom)

  const handleAddItem = () => {
    const newItem: ActiveInvestmentItemType = {
      id: new Date().toISOString(),
      name: '',
      score: null,
    }
    setInvestmentItem((prev) => [...prev, newItem])
  }

  return (
    <button type="button" className={S.btn} onClick={handleAddItem}>
      추가
    </button>
  )
}

export default ItemAddBtn

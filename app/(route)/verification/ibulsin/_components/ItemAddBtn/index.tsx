'use client'

import React from 'react'
import S from './index.module.css'
import { useSetRecoilState } from 'recoil'
import investmentItemAtom, { ActiveInvestmentItemType } from '@/app/_store/atom'

function ItemAddBtn() {
  const setInvestmentItem = useSetRecoilState(investmentItemAtom)

  const handleAddItem = () => {
    const newItem: ActiveInvestmentItemType = {
      id: new Date().toISOString(),
      name: '',
      score: 0,
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

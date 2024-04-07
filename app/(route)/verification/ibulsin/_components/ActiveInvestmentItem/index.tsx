/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState } from 'react'
import S from './index.module.css'
import cn from 'classnames'
import { useRecoilState } from 'recoil'
import investmentItemAtom, { ActiveInvestmentItemType } from '@/app/_store/atom'

interface ActiveInvestmentItemProps {
  item: ActiveInvestmentItemType
}

function ActiveInvestmentItem({ item }: ActiveInvestmentItemProps) {
  const [investmentItem, setInvestmentItem] = useRecoilState(investmentItemAtom)
  const [itemName, setItemName] = useState(item?.name ?? '')
  const [itemScore, setItemScore] = useState(item?.score ?? 0)

  const handleDeleteItem = () => {
    if (investmentItem.length <= 1) {
      return
    }

    setInvestmentItem((prev) => {
      const next = prev.filter(
        (investmentItem) => investmentItem.id !== item.id,
      )
      console.log(next)

      return next
    })
  }

  const handleChangeNameInput = (e: any) => {
    const { value } = e.target
    setItemName(value)

    setInvestmentItem((prev) =>
      prev.map((investmentItem) =>
        investmentItem.id === item.id
          ? { ...item, name: value }
          : investmentItem,
      ),
    )
  }
  const handleChangeScoreInput = (e: any) => {
    const { value } = e.target
    setItemScore(value)

    setInvestmentItem((prev) =>
      prev.map((investmentItem) =>
        investmentItem.id === item.id
          ? { ...item, name: value }
          : investmentItem,
      ),
    )
  }

  return (
    <div className={S.item_container}>
      <div className={S.item_input_wrapper}>
        <input
          className={cn(S.item_name_input, S.input)}
          placeholder="아이템1"
          value={itemName}
          onChange={(e) => handleChangeNameInput(e)}
        />
        <div className={S.score_container}>
          <input
            className={cn(S.item_score_input, S.input)}
            type="number"
            placeholder="2"
            value={itemScore}
            onChange={(e) => handleChangeScoreInput(e)}
          />
          <span>점</span>
        </div>
      </div>
      <button className={S.delete_btn} onClick={handleDeleteItem}>
        삭제
      </button>
    </div>
  )
}

export default ActiveInvestmentItem

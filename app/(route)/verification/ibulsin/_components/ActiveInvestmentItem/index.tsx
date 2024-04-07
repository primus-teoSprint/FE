/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {
  ActiveInvestmentItemType,
  investmentItemAtom,
  selectedItemAtom,
} from '@/app/_store/atom'
import cn from 'classnames'
import { ChangeEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import ItemAddBtn from '../ItemAddBtn'
import S from './index.module.css'

interface ActiveInvestmentItemProps {
  item: ActiveInvestmentItemType
  index: number
  selectedIndex: number | null
  onSelect: (index: number) => void
}

function ActiveInvestmentItem({
  item,
  index,
  selectedIndex,
  onSelect,
}: ActiveInvestmentItemProps) {
  const [investmentItem, setInvestmentItem] = useRecoilState(investmentItemAtom)
  const [, setSelectedItem] = useRecoilState(selectedItemAtom)
  const [itemName, setItemName] = useState(item?.name ?? '')
  const [itemScore, setItemScore] = useState<number | undefined>(
    item?.score ?? undefined,
  )

  const isChecked = selectedIndex === index

  const handleCheckboxChange = () => {
    onSelect(index)
    const selectedInvestmentItem = investmentItem[index]
    setItemName(selectedInvestmentItem.name)
    setItemScore(selectedInvestmentItem?.score ?? undefined)

    setSelectedItem({
      name: selectedInvestmentItem.name,
      score: selectedInvestmentItem.score,
    })
  }

  const handleDeleteItem = () => {
    if (investmentItem.length <= 1) {
      return
    }

    setInvestmentItem((prev) => {
      const next = prev.filter(
        (investmentItem) => investmentItem.id !== item.id,
      )

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

  const handleChangeScoreInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setItemScore(isNaN(value) ? undefined : value)
    setInvestmentItem((prev) =>
      prev.map((investmentItem) =>
        investmentItem.id === item.id
          ? { ...item, score: value }
          : investmentItem,
      ),
    )
  }

  return (
    <>
      <div className={S.item_container}>
        <div className={S.item_input_wrapper}>
          <input
            className={cn(S.item_name_input, S.input)}
            placeholder="아이템 이름을 입력해 주세요."
            value={itemName}
            onChange={(e) => handleChangeNameInput(e)}
          />
          <div className={S.score_container}>
            <input
              className={cn(S.item_score_input, S.input)}
              type="number"
              value={itemScore ?? ''}
              onChange={(e) => handleChangeScoreInput(e)}
            />
            <span>점</span>
          </div>
        </div>
      </div>
      <div className={S.btnWrapper}>
        <input
          type="checkbox"
          className={S.checkbox}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className={S.rowWrapper}>
          <button
            type="button"
            className={S.delete_btn}
            onClick={handleDeleteItem}
          >
            삭제
          </button>
          <ItemAddBtn />
        </div>
      </div>
    </>
  )
}

export default ActiveInvestmentItem

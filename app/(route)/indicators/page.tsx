'use client'

import Title from '@/app/_common/text/title'
import { totalinputValueAtom } from '@/app/_store/atom'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import Nav from '../list/_components/nav'
import ActiveInvestmentList from '../verification/ibulsin/_components/ActiveInvestmentList'
import FormTitle from './_components/form/FormTitle'
import FormS from './_components/form/form.module.css'
import S from './indicators.module.css'

//* 투자 지표 입력 페이지입니다.
//TODO: title에 사용자가 입력했던 요소들이 보여지게 됩니다.
function Indicators() {
  const router = useRouter()
  const [inputValue, setInputValue] = useRecoilState(totalinputValueAtom)
  const [error, setError] = useState('')
  const [checkError, setCheckError] = useState('')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    setError('')
  }

  const handleSubmit = () => {
    if (!/^\d+$/.test(inputValue) && selectedIndex === null) {
      setError('숫자만 입력 가능합니다.')
      setCheckError('지표 항목을 한가지 선택해야 합니다.')
    } else if (!/^\d+$/.test(inputValue)) {
      setError('숫자만 입력 가능합니다.')
    } else if (selectedIndex === null) {
      setCheckError('지표 항목을 한가지 선택해야 합니다.')
    } else {
      setError('')
      setCheckError('')
      router.push('/result')
    }
  }

  return (
    <>
      <Nav />
      <div className={S.wrapper}>
        <div className={S.paddingWrapper}>
          <Title title="아이디어 제목" />
        </div>

        <div className={S.formWrapper}>
          <div className={S.overflowWrapper}>
            <div className={S.marginWrapper}>
              <FormTitle
                title="전체 이용자 수"
                subTitle="전체 이용자 수를 가지고 총 결과 지표가 계산됩니다."
              />

              <div className={FormS.inputWrapper}>
                <input
                  className={FormS.input}
                  placeholder="수치를 입력해 주세요."
                  value={inputValue}
                  onChange={handleChange}
                />
              </div>
              {error && <span className={FormS.error}>{error}</span>}
            </div>
            <div className={S.marginWrapper}>
              <FormTitle
                title="지표 항목"
                subTitle="점수 환산의 기준이 되는 한가지의 항목을 골라주세요."
              />
              <ActiveInvestmentList
                selectedIndex={selectedIndex}
                onSelect={(index: number) => setSelectedIndex(index)}
              />
              {checkError && <span className={FormS.error}>{checkError}</span>}
            </div>
          </div>
          <div className={S.bottomWrapper}>
            <button
              type="submit"
              className={S.submitBtnWrapper}
              onClick={handleSubmit}
            >
              제출하기
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Indicators

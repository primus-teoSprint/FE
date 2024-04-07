'use client'

import Title from '@/app/_common/text/title'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Nav from '../list/_components/nav'
import ActiveInvestmentList from '../verification/ibulsin/_components/ActiveInvestmentList'
import FormTitle from './_components/form/FormTitle'
import FormS from './_components/form/form.module.css'
import S from './indicators.module.css'

//* 투자 지표 입력 페이지입니다.
//TODO: title에 사용자가 입력했던 요소들이 보여지게 됩니다.
//TODO: recoil 사용
function Indicators() {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    setError('')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!/^\d+$/.test(inputValue)) {
      setError('숫자만 입력 가능합니다.')
    } else {
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

            {error && (
              <span className={FormS.error}>숫자만 입력 가능합니다.</span>
            )}

            <ActiveInvestmentList />
          </div>

          <div className={S.bottomWrapper}>
            <button
              type="submit"
              className={S.submitBtnWrapper}
              onClick={() => handleSubmit}
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

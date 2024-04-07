'use client'

import Title from '@/app/_common/text/title'
import Link from 'next/link'
import Nav from '../list/_components/nav'
import Form from './_components/form'
import S from './indicators.module.css'

//* 투자 지표 입력 페이지입니다.
//TODO: title에 사용자가 입력했던 요소들이 보여지게 됩니다.
function Indicators() {
  return (
    <>
      <Nav />
      <div className={S.wrapper}>
        <div className={S.paddingWrapper}>
          <Title title="아이디어 제목" />
        </div>
        <form className={S.formWrapper}>
          <div className={S.overflowWrapper}>
            <Form
              title="전체 이용자 수"
              subTitle="전체 이용자 수를 가지고 총 결과 지표가 계산됩니다."
            />
            {/* <Form title="이메일" /> */}
          </div>

          <div className={S.bottomWrapper}>
            <button type="submit" className={S.submitBtnWrapper}>
              <Link href="/result">제출하기</Link>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Indicators

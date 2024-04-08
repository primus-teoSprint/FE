'use client'

import Nav from '@/app/_common/nav'
import Title from '@/app/_common/text/title'
import IdeaCard from './_components/ideaCard'
import S from './mypage.module.css'
import { Suspense } from 'react'

//TODO: 사용자 명, 아이디어 검증 수가 들어갑니다.
//TODO: 완료된 아이디어, 입력 전 아이디어를 불러옵니다.(get)
function Mypage() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <div className={S.wrapper}>
        <Nav />
        <Title title="아이디어" />

        <span className={S.sectionTitle}>완료</span>
        <p className={S.sectionSubTitle}>투자 지표를 완료한 아이디어</p>
        <div className={S.ideaCardWrapper}>
          <IdeaCard />
        </div>

        <span className={S.sectionTitle}>입력 전</span>
        <p className={S.sectionSubTitle}>투자 지표를 입력하지 않은 아이디어</p>
        <div className={S.ideaCardWrapper}>
          <IdeaCard />
        </div>
      </div>
    </Suspense>
  )
}

export default Mypage

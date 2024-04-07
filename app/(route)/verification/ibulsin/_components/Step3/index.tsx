'use client'

import React from 'react'
import S from './index.module.css'
import Link from 'next/link'
import Textarea from '../Textarea'
import MoreExplainBtn from '../MoreExplainBtn'
import { ibulsinVariants } from '@/app/_constants/ibulsin'

function Step3() {
  const { xyz, pretotyping } = ibulsinVariants

  return (
    <div className={S.main_container}>
      <div className={S.step_info}>
        <h3 className={S.step}>STEP 3</h3>
        <p className={S.step_explain}>
          xyz 가설과 적극적 투자지표를
          <br />
          세워보아요.
        </p>
      </div>
      <div className={S.survey_container}>
        <div className={S.input_container}>
          <div className={S.input_title_container}>
            <h3 className={S.input_title}>xyz 가설</h3>
            <MoreExplainBtn type={xyz} />
          </div>
          <p className={S.input_explain}>
            XYZ 법칙으로 표현된 시장 호응 가설의 범위를 잘게 쪼개 xyz법칙으로
            표현해보세요.
          </p>
          <Textarea fieldKey={xyz} />
        </div>
        <div className={S.input_container}>
          <div className={S.flex_between_wrapper}>
            <div className={S.flex_wrapper}>
              <h3 className={S.input_title}>프로토 타이핑 계획</h3>
              <MoreExplainBtn type={pretotyping} />
            </div>
          </div>
          <p className={S.input_explain}>
            {`xyz가설로 표현된 시장 호응 가설을 빠르게 적은 비용으로 테스트를
            시도해보는 것을 '프리토타이핑' 이라구해요. 시제품을 의미하는 프로토타입과는 
            다르게 시제품이 없어도 다른 방법을 만들어 가설을 확인하는 테스트 방법이에요.
            `}
          </p>
          <Textarea fieldKey={pretotyping} />
        </div>
        <div className={S.direction_btns}>
          <Link className={S.prev_btn} href={'/verification/ibulsin?step=2'}>
            이전 단계
          </Link>
          <button className={S.next_btn} type="button">
            제출 하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step3

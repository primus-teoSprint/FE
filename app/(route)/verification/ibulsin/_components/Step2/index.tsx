'use client'

import React from 'react'
import S from './index.module.css'
import Link from 'next/link'
import Textarea from '../Textarea'
import MoreExplainBtn from '../MoreExplainBtn'

function Step2() {
  return (
    <div className={S.main_container}>
      <div className={S.step_info}>
        <h3 className={S.step}>STEP 2</h3>
        <p className={S.step_explain}>
          시장호응가설과 XYZ가설을
          <br />
          세워보아요.
        </p>
      </div>
      <div className={S.survey_container}>
        <div className={S.input_container}>
          <div className={S.input_title_container}>
            <h3 className={S.input_title}>시장호응 가설</h3>
            <MoreExplainBtn type={'marketResponse'} />
          </div>
          <p className={S.input_explain}>
            시장호응가설(Market Engagement Hypothesis)이란 시장이 우리의
            아이디어를 어떻게 받아들일지에 대한 우리의 핵심 신념이나 가정을
            얘기해요.
          </p>
          <Textarea fieldKey={'marketResponse'} />
        </div>
        <div className={S.input_container}>
          <div className={S.input_title_container}>
            <h3 className={S.input_title}>XYZ 가설</h3>
            <MoreExplainBtn type={'XYZ'} />
          </div>
          <p className={S.input_explain}>
            적어도 X퍼센트의 Y는 Z 할 것이다 라는 형태의 가설이에요. 시장호응
            가설을 바탕으로 숫자로 치환에 좀 더 치밀하게 하는 도구예요
          </p>
          <Textarea fieldKey={'XYZ'} />
        </div>
        <div className={S.direction_btns}>
          <Link className={S.prev_btn} href={'/verification/ibulsin?step=1'}>
            이전 단계
          </Link>
          <Link className={S.next_btn} href={'/verification/ibulsin?step=3'}>
            다음 단계
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Step2

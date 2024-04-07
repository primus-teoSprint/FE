'use client'

import Link from 'next/link'
import Textarea from '../Textarea'
import style from './index.module.css'

function Step1() {
  return (
    <div className={style.main_container}>
      <div className={style.step_info}>
        <h3 className={style.step}>STEP 1</h3>
        <p className={style.step_explain}>
          생각한 아이디어를
          <br />
          작성해 주세요.
        </p>
      </div>
      <div className={style.survey_container}>
        <div className={style.input_container}>
          <h3 className={style.input_title}>아이디어 개요</h3>
          <p className={style.input_explain}>
            생각한 아이디어를 자유롭게 작성해봐요! 이곳에서는 오로지
            아이디어에만 집중해요.
          </p>
          <Textarea fieldKey={'outline'} />
        </div>
        <div className={style.input_container}>
          <h3 className={style.input_title}>생각하게 된 배경</h3>
          <p className={style.input_explain}>
            해당 아이디어를 어떻게 생각하게 되었나요?
          </p>
          <Textarea fieldKey={'why'} />
        </div>
        <div className={style.direction_btns}>
          <Link
            className={style.next_btn}
            href={'/verification/ibulsin?step=2'}
          >
            다음 단계
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Step1

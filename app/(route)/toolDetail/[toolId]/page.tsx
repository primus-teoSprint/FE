'use client'

import Modal from '@/app/_common/modal'
import Nav from '@/app/_common/nav'
import Title from '@/app/_common/text/title'
import { useState } from 'react'
import S from './toolDetail.module.css'

//TODO: 검증하기 누를 시 해당 아이디어 툴의 id로 이동하기
//TODO: 주석 처리 실제 데이터로 변경하기
function ToolDetail() {
  const [clickBtn, setClickBtn] = useState(false)

  return (
    <div className={S.wrapper}>
      <Nav />
      <div className={S.introWrapper}>
        <div className={S.imgWrapper}>
          {/* <Image
            src={toolImg}
            alt="아이디어 툴 이미지"
            width={80}
            height={80}
          /> */}
        </div>
        {/* <Title title={title} />
        <p> {createdBy}</p> */}
      </div>

      <div className={S.contentWrapper}>
        <div className={S.btnWrapper}>
          <button
            className={`${S.btn} ${!clickBtn ? S.clickBtn : ''}`}
            onClick={() => setClickBtn((prevState) => !prevState)}
          >
            Description
          </button>
          <button
            className={`${S.btn} ${clickBtn ? S.clickBtn : ''}`}
            onClick={() => setClickBtn((prevState) => !prevState)}
          >
            Company
          </button>
        </div>

        {!clickBtn ? (
          <>
            <div className={S.marginWrapper}>
              <Title title="개요" />
              {/* <p>{content}</p> */}
            </div>
            <div className={S.marginWrapper}>
              <Title title="검증 방식" />
              <ul>
                {/* {verificationMethod.map((method, index) => (
              <li className={S.li}>
                  <div className={S.circle}></div> {method}
                </li>
            ))} */}
              </ul>
            </div>
          </>
        ) : (
          <div className={S.marginWrapper}>
            <Title title="실제 사례" />

            <div className={S.columnWrapper}>
              {/* <Image
                src={toolImg}
                alt="아이디어 툴 이미지"
                width={60}
                height={60}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              /> */}
            </div>
          </div>
        )}
      </div>

      <Modal
        open="검증하기"
        title="아이디어 불패의 법칙"
        subTitle="선택한 해당 아이디어 툴로 검사를 진행하시겠습니까? :)"
        buttonTitle="해당 툴로 검증하기"
        buttonLink="/verification/ibulsin?step=1"
      ></Modal>
    </div>
  )
}

export default ToolDetail

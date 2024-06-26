'use client'

import Modal from '@/app/_common/modal'
import Nav from '@/app/_common/nav'
import Title from '@/app/_common/text/title'
import { Suspense, useState } from 'react'
import S from './toolDetail.module.css'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
import { Root } from '../../../_constants/toolcard'
import Image from 'next/image'

//TODO: 검증하기 누를 시 해당 아이디어 툴의 id로 이동하기
//TODO: 주석 처리 실제 데이터로 변경하기
function ToolDetail() {
  const [clickBtn, setClickBtn] = useState(false)

  const params = useParams()
  const toolId = params.toolId as string
  const { data, isFetching } = useQuery<AxiosResponse<Root>>({
    queryKey: ['toolDetail'],
    queryFn: () => axios.get(`http://222.121.148.192/api/toolDetails`),
  })
  if (isFetching) {
    return <div>...loading</div>
  }

  const resData = data?.data.data.tool[Number(toolId)]

  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <div className={S.wrapper}>
        <Nav />
        <div className={S.introWrapper}>
          <div className={S.imgWrapper}>
            <Image
              src={resData?.toolImg || ''}
              alt="아이디어 툴 이미지"
              width={80}
              height={80}
            />
          </div>
          <Title title={resData?.title || ''} />
          <p> {resData?.createdBy}</p>
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
                <p>{resData?.content}</p>
              </div>
              <div className={S.marginWrapper}>
                <Title title="검증 방식" />
                <ul>
                  {resData?.verificationMethod.map((method, index) => {
                    return (
                      <li className={S.li} key={index}>
                        <div className={S.circle}></div>
                        <div className={S.method}>{method}</div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </>
          ) : (
            <div className={S.marginWrapper}>
              <Title title="실제 사례" />

              <div className={S.columnWrapper}>
                {resData?.company.map((company, index) => {
                  return (
                    <div className={S.examplewrap} key={index}>
                      <div className={S.img}>
                        <Image
                          src={company || ''}
                          alt="아이디어 툴 이미지"
                          width={120}
                          height={40}
                        />
                      </div>
                      <div className={S.examplecontent}>
                        {resData.exampleContent[index]}
                      </div>
                    </div>
                  )
                })}
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
    </Suspense>
  )
}

export default ToolDetail

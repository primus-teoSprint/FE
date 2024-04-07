'use client'

import Nav from '@/app/_common/nav'
import Title from '@/app/_common/text/title'
import { useState } from 'react'
import S from './toolDetail.module.css'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
import { Tool, Root } from '../../../_constants/toolcard'
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
                      {method}
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
              <Image
                src={resData?.toolImg || ''}
                alt="아이디어 툴 이미지"
                width={60}
                height={60}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              />
            </div>
          </div>
        )}
      </div>

      <Link href={`/verification/ibulsin?step=1`}>
        <div>검증하기</div>
      </Link>
    </div>
  )
}

export default ToolDetail

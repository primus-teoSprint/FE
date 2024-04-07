'use client'

import Link from 'next/link'
import Nav from '../../_common/nav/index'
import Title from '../../_common/text/title'
import Search from '../../_components/search'
import S from './page.module.css'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
import { Data, Tool, Root } from '../../_constants/toolcard'
import ToolCard from '@/app/_components/card/toolCard'
import KeyWordTool from '@/app/_components/card/toolCard/keyWordToolCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

//TODO: 주석처리 사항들에 데이터 가져오기
function Main() {
  const { data, isFetching } = useQuery<AxiosResponse<Root>>({
    queryKey: ['getTools'],
    queryFn: () => axios.get('http://222.121.148.192/api/toolDetails'),
  })

  if (isFetching) {
    return <div>...loading</div>
  }

  const resData = data?.data.data.tool

  return (
    <main className={S.wrapper}>
      <Nav />
      <div className={S.inWrapper}>
        <Link href="/search">
          <Search />
        </Link>
        <div className={S.marginWrapper}>
          <Title title="인기 많은 툴" />
        </div>
        <div className={S.toolCardWrapper}>
          <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {resData?.map((data: Tool, index: number) => {
              return (
                <SwiperSlide style={{ width: '390px' }}>
                  <ToolCard
                    title={data?.title || ''}
                    subTitle={data?.subTitle || ''}
                    description={data?.description || ''}
                    toolImg={data?.toolImg || ''}
                    toolId={index}
                    key={index}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className={S.rowWrapper}>
          <Title title="검증 툴 리스트" />
          <Link href="/list">자세히 보기</Link>
        </div>
        <div className={S.keyWordCardWrapper}>
          {resData?.map((data: Tool, index) => {
            return (
              <KeyWordTool
                title={data?.title || ''}
                subTitle={data?.subTitle || ''}
                toolImg={data?.toolImg || ''}
                key={index}
                toolId={index}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Main

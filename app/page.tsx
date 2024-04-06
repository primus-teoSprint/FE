'use client'

import Link from 'next/link'
import Nav from './_common/nav'
import Title from './_common/text/title'
import Search from './_components/search'
import S from './page.module.css'

//TODO: 주석처리 사항들에 데이터 가져오기
function Home() {
  return (
    <main className={S.wrapper}>
      <Nav />
      <div className={S.inWrapper}>
        <Search />
        <div className={S.marginWrapper}>
          <Title title="인기 많은 툴" />
        </div>
        <div className={S.toolCardWrapper}>
          {/* <ToolCard
            title=""
            subTitle=""
            description=""
            toolImg=""
          /> */}
        </div>
        <div className={S.rowWrapper}>
          <Title title="검증 툴 리스트" />
          <Link href="/list">자세히 보기</Link>
        </div>
        <div className={S.keyWordCardWrapper}>
          {/* <KeyWordTool title="" subTitle="" toolImg="" /> */}
        </div>
      </div>
    </main>
  )
}

export default Home

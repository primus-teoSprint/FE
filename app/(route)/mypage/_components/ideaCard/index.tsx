import Link from 'next/link'
import S from './ideaCard.module.css'

//TODO: 아이디어 명과 사용한 툴이 들어가게 됩니다.
//TODO: 완료된 아이디어일 경우 결과 페이지(/result)로 이동합니다.
//TODO: 진행중인 아이디어일 경우 투자 지표 페이지(/indicators)로 이동합니다.
function IdeaCard() {
  return (
    <div className={S.wrapper}>
      <Link href="/indicators">
        <div className={S.rowWrapper}>
          <div className={S.columnWrapper}>
            <span className={S.ideaTitle}>아이디어 제목</span>
            <p className={S.ideaTool}>아이디어 툴</p>
          </div>

          <div className={S.btnWrapper}>열람</div>
        </div>
      </Link>
    </div>
  )
}

export default IdeaCard

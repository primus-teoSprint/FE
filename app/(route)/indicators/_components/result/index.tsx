import Nav from '@/app/_common/nav'
import Title from '@/app/_common/text/title'
import S from './result.module.css'
import Pyramid from './Pyramid'

//TODO: 사용자가 클릭한 아이디어 이름과 해당 툴을 사용한 사용자 수가 보여집니다.
function Result() {
  return (
    <div className={S.wrapper}>
      <Nav />
      <div className={S.contentwrap}>
        <Title title="검증 결과" />
        <Title title="아이디어 이름" />
        <span className={S.totaluser}>전체 사용자 162명</span>
      </div>
      <div className={S.scorewrap}>
        <Pyramid />
        <div className={S.myscore}>100점 달성</div>
      </div>
      <div className={S.contentwrap}>
        <span className={S.showscore}>
          매우 높음 (~90점), 높음 (~70점), 보통(~50점),
        </span>
        <span className={S.showscore}>낮음(~30점), 매우낮음 (~10점)</span>
      </div>
    </div>
  )
}

export default Result

import Nav from '@/app/_common/nav'
import Title from '@/app/_common/text/title'
import { investmentItemAtom, totalinputValueAtom } from '@/app/_store/atom'
import { useRecoilValue } from 'recoil'
import S from './result.module.css'
import Pyramid from './Pyramid'

//* 결과페이지 입니다.
//TODO: 사용자가 클릭한 아이디어 이름과 해당 툴을 사용한 사용자 수가 보여집니다.
function Result() {
  const selectedItem = useRecoilValue(investmentItemAtom)
  const totalinputValue = parseInt(useRecoilValue(totalinputValueAtom))

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

        <div>
          <span className={S.title}>검증 지표</span>
          <p className={S.subTitle}>계산 결과지입니다.</p>

          <p>전체 이용자 수 : {totalinputValue}</p>

          {selectedItem.map((item) => (
            <span key={item.id}>
              <p>선택한 아이템 이름: {item.name}</p>
              <p>선택한 아이템 점수: {item.score}</p>
              <p>최종 점수: {item.score && item.score * totalinputValue}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Result

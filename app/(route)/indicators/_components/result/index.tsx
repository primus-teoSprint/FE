import Nav from '@/app/_common/nav'
import Title from '@/app/_common/text/title'
import { investmentItemAtom, totalinputValueAtom } from '@/app/_store/atom'
import { useRecoilValue } from 'recoil'
import S from './result.module.css'

//* 결과페이지 입니다.
//TODO: 사용자가 클릭한 아이디어 이름과 해당 툴을 사용한 사용자 수가 보여집니다.
function Result() {
  const selectedItem = useRecoilValue(investmentItemAtom)
  const totalinputValue: number = parseInt(useRecoilValue(totalinputValueAtom))
  console.log(totalinputValue)
  return (
    <div className={S.wrapper}>
      <Nav />
      <div>
        <Title title="검증 결과" />

        <div>
          <span className={S.title}>아이디어 이름</span>
          <p className={S.subTitle}>전체 사용자 162명</p>
        </div>

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

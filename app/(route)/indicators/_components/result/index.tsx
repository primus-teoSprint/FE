import Nav from '@/app/_common/nav'
import Title from '@/app/_common/text/title'
import { selectedItemAtom, totalinputValueAtom } from '@/app/_store/atom'
import { useRecoilValue } from 'recoil'
import Pyramid from './Pyramid'
import S from './result.module.css'
import ResultItem from './resultItem'

//* 결과페이지 입니다.
//TODO: 사용자가 클릭한 아이디어 이름과 해당 툴을 사용한 사용자 수가 보여집니다.
function Result() {
  const selectedItem = useRecoilValue(selectedItemAtom)
  const totalinputValue = parseInt(useRecoilValue(totalinputValueAtom))

  const result =
    selectedItem?.score &&
    selectedItem?.people &&
    Math.floor(
      ((selectedItem.people * selectedItem.score) /
        (selectedItem.score * totalinputValue)) *
        100,
    )

  let resultAmount = ''
  if (result! >= 90) {
    resultAmount += '매우 높음'
  } else if (result! >= 70) {
    resultAmount += '높음'
  } else if (result! >= 50) {
    resultAmount += '보통'
  } else if (result! >= 30) {
    resultAmount += '낮음'
  } else if (result! >= 10) {
    resultAmount += '매우 낮음'
  }

  return (
    <>
      <div className={S.wrapper}>
        <Nav />
        <div className={S.contentwrap}>
          <Title title="검증 결과" />
          <span className={S.title}>아이디어 불패의 법칙</span>
          <span className={S.totaluser}>전체 사용자 162명</span>
        </div>
        <div className={S.scorewrap}>
          <div>
            <Pyramid />
            <span className={S.showscore}>
              매우 높음 (~90점), 높음 (~70점), 보통(~50점),
              <br />
              낮음(~30점), 매우낮음 (~10점)
            </span>
          </div>

          <div className={S.myscore}>100점 달성</div>
        </div>
        <div className={S.contentwrap}>
          <span className={S.title}>검증 지표</span>
          <p className={S.totaluser}>
            [{selectedItem?.name}]기준 점수 환산 결과지입니다.
          </p>
          <div className={S.itemWrapper}>
            <ResultItem
              itemTitle="전체 이용자 수"
              itemValue={totalinputValue}
            />

            <ResultItem itemTitle="점수" itemValue={selectedItem?.score} />
            <ResultItem itemTitle="인원 수" itemValue={selectedItem?.people} />

            <div className={S.totalResultWrapper}>
              <span className={S.calculation}>
                (({selectedItem?.people} * {selectedItem?.score} )/({' '}
                {selectedItem?.score} *{totalinputValue} )) * 100
              </span>
              <p className={S.resultTitle}>
                = {result} 이라는 결과가 도출되었습니다.
                <br />
                해당 아이디어의 적극적 투자 지표는 [{resultAmount}]단계에
                속합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={S.bottomWrapper}>
        <button className={S.submitBtnWrapper}>공유하기</button>
      </div>
    </>
  )
}

export default Result

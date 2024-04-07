import Nav from '@/app/_common/nav'
import Title from '@/app/_common/text/title'
import S from './result.module.css'

//TODO: 사용자가 클릭한 아이디어 이름과 해당 툴을 사용한 사용자 수가 보여집니다.
function Result() {
  return (
    <div className={S.wrapper}>
      <Nav />
      <div>
        <Title title="검증 결과" />
        <div>
          <Title title="아이디어 이름" />
          <span>전체 사용자 162명</span>
        </div>
      </div>
    </div>
  )
}

export default Result

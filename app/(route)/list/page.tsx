import Nav from './_components/nav'
import ListCompo from './_components/nav/LIstCompo'

//TODO: 주석처리 사항들에 데이터 가져오기
function List() {
  return (
    <div>
      <Nav title="검증 툴 리스트" />
      <ListCompo></ListCompo>
      <span>데이터를 모두 불러왔습니다.</span>
    </div>
  )
}

export default List

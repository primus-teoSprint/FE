import SearchBar from '../../_components/search/index'
import CommonS from '../../page.module.css'
import Nav from '../list/_components/nav'

//TODO: 검색 결과 카드(toolCard) 가져오기
function Search() {
  return (
    <>
      <Nav title="검색 결과" />
      <div className={CommonS.wrapper}>
        <SearchBar />
        <span>데이터를 모두 불러왔습니다.</span>
      </div>
    </>
  )
}

export default Search

import Nav from './_components/nav'
import S from './list.module.css'

//TODO: 주석처리 사항들에 데이터 가져오기
function List() {
  return (
    <>
      <Nav title="검증 툴 리스트" />
      <div className={S.wrapper}>
        {/* <ToolCard
            title=""
            subTitle=""
            description=""
            toolImg=""
          /> */}
        <span>데이터를 모두 불러왔습니다.</span>
      </div>
    </>
  )
}

export default List

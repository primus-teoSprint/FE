import { CiSearch } from 'react-icons/ci'
import S from './search.module.css'

function Search() {
  return (
    <div className={S.wrapper}>
      <CiSearch />
      <input
        placeholder="분석검증 툴을 검색해보세요."
        className={S.inputWrapper}
      />
    </div>
  )
}

export default Search

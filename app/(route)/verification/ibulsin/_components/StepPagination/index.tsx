import React from 'react'
import S from './index.module.css'
import PaginationBtn from '../PaginationBtn'

function StepPagination() {
  return (
    <div className={S.step_pagination_container}>
      {Array.from({ length: 3 }, (_, idx) => (
        <PaginationBtn key={idx} step={idx + 1} />
      ))}
    </div>
  )
}

export default StepPagination

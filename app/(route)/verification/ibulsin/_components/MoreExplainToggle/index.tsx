import React from 'react'
import S from './index.module.css'
import { explainData } from '@/app/_constants/ibulsin'

interface MoreExplainToggleProps {
  type: string
}

function MoreExplainToggle({ type }: MoreExplainToggleProps) {
  const filteredData = explainData.filter(
    (explainItem) => explainItem.type === type,
  )
  return (
    <div className={S.toggle_container}>
      {filteredData.map((explainItem, idx) => (
        <p key={idx} style={{ whiteSpace: 'pre-line' }}>
          {explainItem.content}
        </p>
      ))}
    </div>
  )
}

export default MoreExplainToggle

import S from './result.module.css'

interface Props {
  itemTitle: string
  itemValue: string | number | undefined | null
}

function ResultItem({ itemTitle, itemValue }: Props) {
  return (
    <div className={S.resultItemWrapper}>
      <span className={S.itemTitle}>{itemTitle}</span>
      <p className={S.itemValue}>{itemValue}</p>
    </div>
  )
}

export default ResultItem

import S from './title.module.css'

interface TitleProp {
  title: string
}

function Title({ title }: TitleProp) {
  return <span className={S.text}>{title}</span>
}

export default Title

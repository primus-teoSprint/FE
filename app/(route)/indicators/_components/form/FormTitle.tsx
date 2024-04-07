import S from './form.module.css'

interface Props {
  title: string
  subTitle?: string
}

function FormTitle({
  title,
  subTitle = '해당 항목의 수치는 어떻게 되나요?',
}: Props) {
  return (
    <div className={S.wrapper}>
      <span className={S.title}>{title}</span>
      <p className={S.subTitle}>{subTitle}</p>
    </div>
  )
}

export default FormTitle

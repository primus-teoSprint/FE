import S from './form.module.css'

interface Props {
  title: string
  subTitle?: string
}

function Form({
  title,
  subTitle = '해당 항목의 수치는 어떻게 되나요?',
}: Props) {
  return (
    <div className={S.wrapper}>
      <span className={S.title}>{title}</span>
      <p className={S.subTitle}>{subTitle}</p>
      <div className={S.inputWrapper}>
        <input className={S.input} placeholder="수치를 입력해 주세요." />
      </div>
      <span className={S.error}>숫자만 입력 가능합니다.</span>
    </div>
  )
}

export default Form

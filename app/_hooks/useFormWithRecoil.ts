import { RegisterOptions, useForm } from 'react-hook-form'
import { ChangeEventHandler, useEffect } from 'react'
import { RecoilState, useRecoilState } from 'recoil'

export const useFormCustom = (
  key: string,
  atom: RecoilState<string>,
  option: RegisterOptions | undefined,
) => {
  const { register, setValue, watch } = useForm()
  const [recoilState, setRecoilState] = useRecoilState(atom)

  const defaultOption = {
    required: '',
    maxLength: { value: 500, message: '최대 500자까지 작성가능합니다.' },
  }

  const field = register(key, option ?? defaultOption)

  useEffect(() => {
    setValue(key, recoilState)
  }, [recoilState])

  const countCharacters = () => {
    const content = watch(key)

    return content ? content.length : 0
  }

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const { value } = e.target

    setRecoilState(value)
  }

  return { field, countCharacters, handleChange }
}

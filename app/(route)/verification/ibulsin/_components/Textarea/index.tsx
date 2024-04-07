'use client'

import cn from 'classnames'
import { useForm } from 'react-hook-form'
import S from './index.module.css'

interface TextAreaProps {
  fieldKey: 'outline' | 'why' | 'marketResponse' | 'XYZ' | 'xyz' | 'pretotyping'
}

function Textarea({ fieldKey }: TextAreaProps) {
  const { register, watch } = useForm()

  const outlineField = register('outline', {
    required: '',
    maxLength: { value: 500, message: '최대 500자까지 작성가능합니다.' },
  })
  const whyField = register('why', {
    required: '',
    maxLength: { value: 500, message: '최대 500자까지 작성가능합니다.' },
  })
  const marketResponseField = register('marketResponse', {
    required: '',
    maxLength: { value: 500, message: '최대 500자까지 작성가능합니다.' },
  })
  const XYZField = register('XYZ', {
    required: '',
    maxLength: { value: 500, message: '최대 500자까지 작성가능합니다.' },
  })
  const xyzField = register('xyz', {
    required: '',
    maxLength: { value: 500, message: '최대 500자까지 작성가능합니다.' },
  })
  const pretotypingField = register('pretotyping', {
    required: '',
    maxLength: { value: 500, message: '최대 500자까지 작성가능합니다.' },
  })

  const fields = {
    outline: {
      register: outlineField,
      MaxLength: 500,
    },
    why: {
      register: whyField,
      MaxLength: 500,
    },
    marketResponse: {
      register: marketResponseField,
      MaxLength: 500,
    },
    XYZ: {
      register: XYZField,
      MaxLength: 500,
    },
    xyz: {
      register: xyzField,
      MaxLength: 500,
    },
    pretotyping: {
      register: pretotypingField,
      MaxLength: 500,
    },
  }

  const countCharacters = () => {
    const content = watch(fieldKey)
    if (!content) {
      return 0
    }
    return content.length
  }

  return (
    <div className={S.textarea_container}>
      <textarea
        {...fields[fieldKey].register}
        maxLength={fields[fieldKey].MaxLength - 1}
      />
      <div className={S.letter_count_container}>
        <span
          className={cn({
            [S.letter_max]: countCharacters() >= fields[fieldKey].MaxLength,
          })}
        >
          {countCharacters()}
        </span>
        <span>{`/${fields[fieldKey].MaxLength}`}</span>
      </div>
    </div>
  )
}

export default Textarea

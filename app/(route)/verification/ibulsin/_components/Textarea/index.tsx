'use client'

import React from 'react'
import S from './index.module.css'
import cn from 'classnames'
import { RecoilState } from 'recoil'
import { RegisterOptions } from 'react-hook-form'
import { useFormCustom } from '@/app/_hooks/useFormWithRecoil'

interface TextAreaProps {
  fieldKey: 'outline' | 'why' | 'marketResponse' | 'XYZ' | 'xyz' | 'pretotyping'
  atom: RecoilState<string>
  option?: RegisterOptions
}

function Textarea({ fieldKey, atom, option }: TextAreaProps) {
  const { field, countCharacters, handleChange } = useFormCustom(
    fieldKey,
    atom,
    option,
  )

  const MAX_LENGTH = 500

  return (
    <div className={S.textarea_container}>
      <textarea {...field} maxLength={MAX_LENGTH} onChange={handleChange} />
      <div className={S.letter_count_container}>
        <span
          className={cn({
            [S.letter_max]: countCharacters() >= MAX_LENGTH,
          })}
        >
          {countCharacters()}
        </span>
        <span>{`/${MAX_LENGTH}`}</span>
      </div>
    </div>
  )
}

export default Textarea

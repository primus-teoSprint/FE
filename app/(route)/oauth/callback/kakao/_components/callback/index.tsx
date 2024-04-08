'use client'

import Loading from '@/app/_common/loading'
import { userKakaoTokenAtom } from '@/app/_store/atom'
import axiosInstance from '@/app/_utils/axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

function Callback() {
  const router = useRouter()
  const params = useSearchParams()
  const codeParam = params.get('code')
  const [, setLoginUser] = useRecoilState(userKakaoTokenAtom)

  async function postOAuth(code: string) {
    const response = await axiosInstance.post(`api/auth/kakao/signin`, {
      code,
    })

    return response
  }

  useEffect(() => {
    const handleLogin = async () => {
      if (codeParam) {
        try {
          const data = await postOAuth(codeParam)
          localStorage.setItem('accessToken', data.data.token)
          setLoginUser(data.data.token)
          router.push('/main')
        } catch (error) {
          console.error('인증 코드가 존재하지 않습니다.')
        }
      }
    }
    handleLogin()
  }, [])

  return <Loading />
}

export default Callback

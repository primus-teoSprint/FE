'use client'

import { resultAtom, selectedItemAtom } from '@/app/_store/atom'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'

const id = 'kakao-sdk'

function KakaoShareButton() {
  const selectedItem = useRecoilValue(selectedItemAtom)
  const resultItem = useRecoilValue(resultAtom)

  useEffect(() => {
    if (document.getElementById(id) == null) {
      const script = document.createElement('script')
      script.id = id
      script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
      script.onload = () => {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_SHARE_KEY)
        window.Kakao.isInitialized()
      }
      document.body.appendChild(script)
    }
  }, [])

  const kakaoShare = () => {
    window.Kakao.Share.sendCustom({
      installTalk: true,
      templateId: 106777,
      templateArgs: {
        name: `${selectedItem?.name}`,
        result: `${resultItem}`,
      },
    })
  }

  return <button onClick={kakaoShare}>카카오톡 공유</button>
}

export default KakaoShareButton

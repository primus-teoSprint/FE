import React from 'react'
import S from './index.module.css'

interface MoreExplainToggleProps {
  type: string
}

function MoreExplainToggle({ type }: MoreExplainToggleProps) {
  return (
    <div className={S.toggle_container}>
      {type === 'marketResponse' && (
        <p>
          아이디어: 넷플릭스(초기 DVD 기반 모델)
          <br />
          <br />
          시장호응가설: 우편 배송 기반의 DVD 대여 서비스를 월정액 요금제, 반납
          지연 과태료 무료 정책과 결합하여 많은 사람들이 비디오 가게를 이용하는
          대신 우리 서비스에 가입할 것이다.
          <br />
          <br />
          이와같이 시장이 우리의 제품이나 서비스를 어떻게 받아들이지에 대해
          정확한 정의를 내리고, 해당 시장 수요가 존재한다는 증거를 찾아내는 것이
          시장호응가설이 해야 할 일이에요.
        </p>
      )}
      {type === 'XYZ' && (
        <p>
          X는 표적시장의 몇 퍼센트를 차지할 수 있을지, Y는 어떤 표적시장에 대한,
          Z는 표적 시장이 제품에 대해 어떤 방식으로 어느 범위까지 호응 할 까를
          의미해요
          <br />
          <br />
          예제: 적어도 10%의 대기질 지수가 100 이상인 도시에 사는 사람들은
          120달러 짜리 휴대용 오염 탐지기를 구매할 것이다.
        </p>
      )}
    </div>
  )
}

export default MoreExplainToggle

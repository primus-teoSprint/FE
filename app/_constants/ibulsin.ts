export interface ibulsinVariantsType {
  outline: 'outline'
  why: 'why'
  marketResponse: 'marketResponse'
  XYZ: 'XYZ'
  xyz: 'xyz'
  pretotyping: 'pretotyping'
}
interface explainDataType {
  type: string
  content: string
}

export const explainData: explainDataType[] = [
  {
    type: 'marketResponse',
    content: `아이디어: 넷플릭스(초기 DVD 기반 모델)

  시장호응가설: 우편 배송 기반의 DVD 대여 서비스를 월정액 요금제, 반납 지연 과태료 무료 정책과 결합하여 많은 사람들이 비디오 가게를 이용하는 대신 우리 서비스에 가입할 것이다.

  이와같이 시장이 우리의 제품이나 서비스를 어떻게 받아들이지에 대해 정확한 정의를 내리고, 해당 시장 수요가 존재한다는 증거를 찾아내는 것이 시장호응가설 단계에서 해야 할 일이에요.`,
  },
  {
    type: 'XYZ',
    content: `X는 표적시장의 몇 퍼센트를 차지할 수 있을지, Y는 어떤 표적시장에 대한, Z는 표적 시장이 제품에 대해 어떤 방식으로 어느 범위까지 호응 할 것인가를 의미해요

          예제: 적어도 10퍼센트의 한국의 직장인들은 관심사가 같은 사람들과 출퇴근 이야기를 나누고 싶어 할 것이다.
    `,
  },
  {
    type: 'xyz',
    content: `XYZ 법칙 중 범위를 줄여 봐요.

          예제: 적어도 10퍼센트의 분당의 직장인들은 관심사가 같은 사람들과 출근에 이야기를 나누고 싶어 할 것
    `,
  },
  {
    type: 'pretotyping',
    content: `설정한 xyz법칙을 간단하게 테스트해봐요.

          예제: 가볍게 전단지와 홍보패널을 만들어 출퇴근시간에 수원에서 판교까지가는 버스에서 설계한 상품을 얘기하여 사람들의 반응을 살펴본다.
    `,
  },
]

export const ibulsinVariants: ibulsinVariantsType = {
  outline: 'outline',
  why: 'why',
  marketResponse: 'marketResponse',
  XYZ: 'XYZ',
  xyz: 'xyz',
  pretotyping: 'pretotyping',
}

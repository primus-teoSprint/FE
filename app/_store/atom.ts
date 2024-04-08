import { atom } from 'recoil'

export interface ActiveInvestmentItemType {
  id?: string
  name: string
  score: number | null
  people: number | null
}

// type ActiveType = Omit<ActiveInvestmentItemType, 'id'>

// 카카오 유저 토큰
export const userKakaoTokenAtom = atom<string>({
  key: 'userKakaoTokenAtom',
  default: '',
})

// 지표 결과
export const resultAtom = atom<number>({
  key: 'resultAtom',
  default: 0,
})

// 적극적 투자 지표 사용자가 선택한 항목
export const selectedItemAtom = atom<ActiveInvestmentItemType | null>({
  key: 'selectedItemAtom',
  default: null,
})

// 적극적 투자 지표 전체 사용자 수
export const totalinputValueAtom = atom({
  key: 'totalinputValueAtom',
  default: '',
})

export const investmentItemAtom = atom<ActiveInvestmentItemType[]>({
  key: 'investmentItemAtom',
  default: [
    {
      id: new Date().toISOString(),
      name: '',
      score: null,
      people: null,
    },
  ],
})

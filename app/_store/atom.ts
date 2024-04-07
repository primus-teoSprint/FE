import { atom } from 'recoil'

export interface ActiveInvestmentItemType {
  id: string
  name: string
  score: number
}

// type ActiveType = Omit<ActiveInvestmentItemType, 'id'>
// 시온 그는 신이야...
// 고오급 타입 스크립트,,,

const investmentItemAtom = atom<ActiveInvestmentItemType[]>({
  key: 'investmentItemAtom',
  default: [
    {
      id: new Date().toISOString(),
      name: '',
      score: 0,
    },
  ],
})

export default investmentItemAtom

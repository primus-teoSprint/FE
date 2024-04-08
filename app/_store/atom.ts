import { atom } from 'recoil'

export interface ActiveInvestmentItemType {
  id?: string
  name: string
  score: number
  people: number
}

// type ActiveType = Omit<ActiveInvestmentItemType, 'id'>

export const resultAtom = atom<number>({
  key: 'resultAtom',
  default: 0,
})

export const selectedItemAtom = atom<ActiveInvestmentItemType | null>({
  key: 'selectedItemAtom',
  default: null,
})

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
      score: 0,
      people: 0,
    },
  ],
})

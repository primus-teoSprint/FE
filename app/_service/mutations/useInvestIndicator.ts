import axiosInstance from '@/app/_utils/axios'
import { useMutation } from '@tanstack/react-query'

interface bodyDataType {
  totalInput: number
  id: string | undefined
  theorySet: {
    name: string
    score: number
    people: number
  }
  result: number
}

const sendApi = (data: bodyDataType) => {
  console.log(data)
  const response = axiosInstance.post(`/api/investIndicator`, data)

  return response
}

const useInvestIndicatorMutation = () => {
  const { mutate } = useMutation({ mutationFn: sendApi })

  return { mutate }
}

export default useInvestIndicatorMutation

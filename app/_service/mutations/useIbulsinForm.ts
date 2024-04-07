import axiosInstance from '@/app/_utils/axios'
import { useMutation } from '@tanstack/react-query'

interface IbulsinFormBodyType {
  ideaOverView: string
  thinkBackground: string
  marketTheory: string
  bigxyzTheory: string
  smallxyzTheory: string
  pretotypingTheory: string
}

const postForm = (data: IbulsinFormBodyType) => {
  const response = axiosInstance.post(`/api/`, data)

  return response
}

const useIbulsinFormMutation = () => {
  const { mutate } = useMutation({
    mutationFn: postForm,
  })

  return { mutate }
}

export default useIbulsinFormMutation

import axiosInstance from '@/app/_utils/axios'
import { useMutation } from '@tanstack/react-query'

interface IbulsinFormDataType {
  ideaOverview: string
  thinkBackground: string
  marketTheory: string
  bigxyzTheory: string
  smallxyzTheory: string
  pretotypePlan: string
}

const postForm = (data: IbulsinFormDataType) => {
  const body = {
    ...data,
    toolName: '아이디어 불패신화',
  }
  console.log(body)
  const response = axiosInstance.post(`/api/toolTemplates`, body)

  return response
}

const useIbulsinFormMutation = () => {
  const { mutate } = useMutation({
    mutationFn: postForm,
  })

  return { mutate }
}

export default useIbulsinFormMutation

'use client'

import S from '../../list.module.css'
import axios, { AxiosResponse } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Root, Tool } from '@/app/_constants/toolcard'
import ToolCard from '@/app/_components/card/toolCard'

function ListCompo() {
  const { data, isFetching } = useQuery<AxiosResponse<Root>>({
    queryKey: ['getToolList'],
    queryFn: () => axios.get('http://222.121.148.192/api/toolDetails'),
  })

  const resData = data?.data.data.tool

  return (
    <div>
      <div className={S.wrapper}>
        {resData?.map((data: Tool, index) => {
          return <ToolCard title="" subTitle="" description="" toolImg="" />
        })}
      </div>
    </div>
  )
}

export default ListCompo

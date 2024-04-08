'use client'

import S from '../../list.module.css'
import axios, { AxiosResponse } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Root, Tool } from '@/app/_constants/toolcard'
import ToolCard from '@/app/_components/card/toolCard'

function ListCompo() {
  const { data } = useQuery<AxiosResponse<Root>>({
    queryKey: ['getToolList'],
    queryFn: () => axios.get('http://222.121.148.192/api/toolDetails'),
  })

  const resData = data?.data.data.tool

  return (
    <div>
      <div className={S.wrapper}>
        {resData?.map((data: Tool, index) => {
          return (
            <ToolCard
              title={data?.title || ''}
              subTitle={data?.subTitle || ''}
              description={data?.description || ''}
              toolImg={data?.toolImg || ''}
              toolId={index}
              company={data?.company}
              key={index}
            />
          )
        })}
        <span>데이터를 모두 불러왔습니다.</span>
      </div>
    </div>
  )
}

export default ListCompo

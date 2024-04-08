export interface Root {
  data: Data
  total: number
}

export interface Data {
  tool: Tool[]
}

export interface Tool {
  toolImg: string
  title: string
  subTitle: string
  createdBy: string
  description: string
  company: string[]
  keyword: string[]
  content: string
  verificationMethod: string[]
  exampleContent: string[]
}

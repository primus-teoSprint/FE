export interface ToolInform {
  toolImg: string
  title: string
  subTitle?: string
  createdBy?: string
}

export interface ToolCardProps extends ToolInform {
  description?: string
  company?: string[]
  keyword?: string[]
  toolId?: number
}

export interface ToolDetailProps extends ToolCardProps {
  content: string
  verificationMethod: string[]
}

interface ToolInform {
  toolImg: string
  title: string
  subTitle?: string
  createdBy?: string
}

interface ToolCardProps extends ToolInform {
  description?: string
  company?: string[]
  keyword?: string[]
  toolId?: number
}

interface ToolDetailProps extends ToolCardProps {
  content: string
  verificationMethod: string[]
}

interface ToolExample extends ToolCardProps {
  exampleContent: string
}

export type { ToolCardProps, ToolDetailProps, ToolExample, ToolInform }

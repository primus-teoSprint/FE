'use client'
import { ReactNode } from 'react'
import S from './layout.module.css'

function Layout({ children }: { children: Readonly<ReactNode> }) {
  return <div className={S.layout}>{children}</div>
}

export default Layout

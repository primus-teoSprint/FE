import type { Metadata } from 'next'
import logo from '../app/_assets/_images/logo.png'
import Layout from './_components/layout'
import Recoil from './_store/recoil'
import './_style/globals.css'
import './_style/variables.css'
import Providers from './_utils/provider'

export const metadata: Metadata = {
  title: '프리무스',
  description: '아이디어 검증 툴 서비스',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
  },
  icons: { icon: logo.src },
}

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Recoil>
            <Layout>
              {children}
              <div id="modal-root"></div>
            </Layout>
          </Recoil>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout

import Layout from './_components/layout'
import Recoil from './_store/recoil'
import Providers from './_utils/provider'
import './style/globals.css'
import './style/variables.css'

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <Providers>
        <Recoil>
          <Layout>{children}</Layout>
        </Recoil>
      </Providers>
    </html>
  )
}

export default RootLayout

import Layout from './_components/layout'
import Recoil from './_store/recoil'
import './_style/globals.css'
import './_style/variables.css'
import Providers from './_utils/provider'

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

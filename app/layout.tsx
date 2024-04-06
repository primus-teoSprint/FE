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
      <body>
        <Providers>
          <Recoil>
            <Layout>{children}</Layout>
          </Recoil>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout

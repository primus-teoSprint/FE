import Recoil from './_store/recoil'
import Providers from './_utils/provider'

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <Providers>
        <Recoil>{children}</Recoil>
      </Providers>
    </html>
  )
}

export default RootLayout

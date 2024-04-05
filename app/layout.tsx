import Recoil from './_store/recoil'
import Providers from './_utils/provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Providers>
        <Recoil>{children}</Recoil>
      </Providers>
    </html>
  )
}

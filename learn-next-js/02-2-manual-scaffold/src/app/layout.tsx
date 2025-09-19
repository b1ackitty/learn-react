import { PropsWithChildren } from 'react'

// React Server Component
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko-KR">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

import './globals.css'
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="light">
      <body className="min-h-screen bg-secondary">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Acme Tech',
  description: 'Streamline your workflows with our powerful software tools',
  keywords: ['saas', 'software', 'technology', 'productivity', 'efficiency'],
  openGraph: {
    title: 'Acme Tech',
    description: 'Streamline your workflows with our powerful software tools',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
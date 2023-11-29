import AuthProvider from './components/AuthProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from "../components/Nav"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Furniture wep admin',
  description: 'E-commerce web for furniture',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}

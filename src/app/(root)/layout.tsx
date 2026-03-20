import { ReactNode } from 'react'
import '@/config/styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  icons: {
    icon: '/icon.ico',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}

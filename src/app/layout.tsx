import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClientBody } from "./ClientBody"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SPEC Campus - Leading Educational Institution in Gujarat | Engineering, Pharmacy & More",
  description: "SPEC Campus, Gujarat offers various Undergraduate and Postgraduate Courses in Engineering, Pharmacy, Management, Commerce, Applied Sciences, and Computer Applications with excellent placement opportunities.",
  metadataBase: new URL('https://spec.edu.in'),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`} suppressHydrationWarning>
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  )
}

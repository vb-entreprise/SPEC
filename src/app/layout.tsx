import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ClientBody } from "./ClientBody"

export const metadata: Metadata = {
  title: "Best Private University in Punjab, North India (India) - SPEC Institutes",
  description: "SPEC Institutes, Punjab offers various Undergraduate and Postgraduate Courses like Engineering, B.tech, BCA, BBA, HMCT, B.Com, LLB, B.Arch, MBA, M.Tech and MCA.",
  metadataBase: new URL('https://spec.edu'),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-gray-50" suppressHydrationWarning>
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  )
}

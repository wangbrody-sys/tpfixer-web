import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '躍動手機維修 - 台北中正區 | HomePod、iPod、AirPods維修 螺絲滑牙處理',
  description: '台北古亭手機維修，HomePod 1/2代觸控不開機檢修、iPod Classic SSD改裝全系列、AirPods全型號電池更換、螺絲滑牙崩牙專業處理。現場維修。',
  keywords: 'HomePod維修, iPod維修, AirPods電池更換, 螺絲滑牙處理, 台北手機維修, 古亭手機維修',
  openGraph: {
    title: '躍動手機維修 - 台北古亭站',
    description: '現場快速維修，30分鐘取件，6個月保固',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
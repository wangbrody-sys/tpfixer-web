import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '躍動手機維修，專業維修 / 透明報價 / 現場快速取件 台北市中正區，台大、師大、古亭捷運，專精 手機維修 平板維修 筆電維修',
  description: '台北古亭手機維修，專精手機、平板、筆電、耳機、喇叭、播放器維修。現場快速取件，6個月保固，透明報價。',
  keywords: '躍動手機維修, 手機維修, 平板維修, 筆電維修, 古亭捷運, 台北中正區, 維修推薦',
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

import type { Metadata } from 'next'
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
export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-purple-500 to-cyan-400 min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{animationDelay:'1s'}} />
      </div>
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="inline-block bg-white/20 backdrop-blur-md rounded-full px-6 py-2 mb-8 text-sm font-medium">
          🚀 古亭捷運8號出口步行1分鐘
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          躍動<span className="text-yellow-300">手機維修</span>
        </h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90">
          台北中正區 3C 裝置維修專家
        </p>
        <p className="text-lg mb-10 opacity-80">
          手機 / 平板 / 音樂播放器 / 耳機 / 喇叭 / 筆電
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="http://www.cdma.com.tw" className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-purple-800 transition-all hover:scale-105 shadow-xl">
            📱 了解所有維修項目
          </a>
          <a href="http://www.cdma.com.tw" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all hover:scale-105">
            📞 02-2393-8998
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {['現場維修', '30分鐘取件', '6個月保固', '透明報價'].map(tag => (
            <span key={tag} className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">{tag}</span>
          ))}
        </div>
        <div className="mt-8">
          <a href="http://www.cdma.com.tw" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <span className="text-base">🔖</span>
            <span>貼心提醒：維修前請至 www.cdma.com.tw 確認最新品項與報價</span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white opacity-60">
        ↓ 向下看更多
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      icon: '📱',
      title: '手機維修',
      tag: '主力項目',
      desc: '各代手機面板更換、電池更換、Face ID 修復、麥克風異常、充電問題處理。',
      highlight: false,
      link: 'http://www.cdma.com.tw',
    },
    {
      icon: '⌚',
      title: '智慧手錶維修',
      tag: '熱門服務',
      desc: '觸控不良、喇叭異常、主機板問題，全系列現場檢修處理。',
      highlight: false,
      link: 'http://www.cdma.com.tw',
    },
    {
      icon: '🎵',
      title: '音樂播放器改裝',
      tag: '經典款',
      desc: 'Classic 全系列升級 SSD 大容量，播放時間延長，資料搬家服務。',
      highlight: false,
      link: 'http://www.cdma.com.tw',
    },
    {
      icon: '🎧',
      title: '耳機电池更換',
      tag: '當日完成',
      desc: '全型號電池更換，原廠品質保證，當天取件。',
      highlight: false,
      link: 'http://www.cdma.com.tw',
    },
    {
      icon: '🔩',
      title: '螺絲滑牙崩牙處理',
      tag: '專業技術',
      desc: '筆電、手機、遊戲機，任何螺絲滑牙、崩牙、異物嵌入，專業工具取出。',
      highlight: true,
      link: 'http://www.cdma.com.tw',
    },
    {
      icon: '💻',
      title: '筆電維修',
      tag: '疑難杂症',
      desc: '筆電面板、鍵盤、硬碟、記憶體升級，、主機板故障檢修。',
      highlight: false,
      link: 'http://www.cdma.com.tw',
    },
    {
      icon: '🔊',
      title: '家用喇叭維修',
      tag: '熱門服務',
      desc: '觸控不良、喇叭異常、無法開機，全系列專業檢修。',
      highlight: true,
      link: 'http://www.cdma.com.tw',
    },
    {
      icon: '🔧',
      title: '平板維修',
      tag: '保固服務',
      desc: '面板更換、電池更換、充電異常、HOME 鍵維修，全型號服務。',
      highlight: false,
      link: 'http://www.cdma.com.tw',
    },
  ]
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">專業維修服務</h2>
          <p className="text-xl text-gray-600">涵蓋所有 3C 裝置疑難杂症，點擊了解詳情</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(s => (
            <a key={s.title} href={s.link} className={`relative rounded-2xl p-6 ${s.highlight ? 'bg-gradient-to-br from-orange-500 to-pink-500 text-white' : 'bg-white border border-gray-200 text-gray-800'} shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 block`}>
              {s.highlight && (
                <span className="absolute -top-3 -right-3 bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full">
                  ★ 熱門
                </span>
              )}
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <span className={`inline-block text-xs font-semibold px-2 py-1 rounded mb-3 ${s.highlight ? 'bg-white/20' : 'bg-purple-100 text-purple-600'}`}>
                {s.tag}
              </span>
              <p className={`text-sm leading-relaxed ${s.highlight ? 'opacity-90' : 'text-gray-600'}`}>{s.desc}</p>
              <div className="mt-4 text-sm font-bold opacity-60">→ 查看報價</div>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="http://www.cdma.com.tw" className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-xl">
            查看完整維修項目與報價 →
          </a>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const reasons = [
    { icon: '⚡', title: '30分鐘取件', desc: '多數維修當天完成，不用漫長等待' },
    { icon: '💰', title: '透明報價', desc: '維修前完整報價，杜絕中途加價' },
    { icon: '🛡️', title: '6個月保固', desc: '維修後享有完整保固服務' },
    { icon: '🏆', title: '國際品牌認證', desc: '通過兩大國際品牌維修廠商認證' },
    { icon: '📍', title: '古亭站1分鐘', desc: '捷運古亭站8號出口，步行1分鐘' },
    { icon: '📋', title: '不用預約', desc: '現場登記，隨到隨修' },
  ]
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">為什麼選擇躍動？</h2>
          <p className="text-xl text-purple-200">12年在地維修經驗，數千位客戶推薦</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(r => (
            <div key={r.title} className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="text-5xl mb-4">{r.icon}</div>
              <h3 className="text-xl font-bold mb-2">{r.title}</h3>
              <p className="text-purple-200">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">裝置壞了？來這裡處理的！</h2>
        <p className="text-xl mb-10 opacity-90"> 查看完整維修項目與報價，一切資訊都公開透明</p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="http://www.cdma.com.tw" className="bg-white text-orange-600 px-10 py-5 rounded-full font-extrabold text-xl hover:bg-yellow-200 transition-all hover:scale-105 shadow-2xl">
            🌐 前往躍動官網
          </a>
          <a href="https://lin.ee/QZIqSo9" className="border-2 border-white text-white px-10 py-5 rounded-full font-extrabold text-xl hover:bg-white hover:text-green-600 transition-all hover:scale-105">
            💬 LINE 線上詢問
          </a>
        </div>
        <div className="mt-8 text-sm opacity-80">
          📍 台北市中正區羅斯福路四段76號（古亭站8號出口步行1分鐘）
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-3xl font-black text-white mb-4">躍動手機維修</div>
        <div className="mb-6 space-y-2">
          <p>📍 台北市中正區羅斯福路四段76號（古亭站8號出口）</p>
          <p>📞 02-2393-8998</p>
          <p>⏰ 營業時間：平日 11:00-21:00 / 假日 12:00-20:00</p>
          <p>🔗 <a href="http://www.cdma.com.tw" className="underline hover:text-white">www.cdma.com.tw</a></p>
        </div>
        <div className="border-t border-gray-700 pt-6 text-sm">
          © 2025 TPFIXER / 躍動手機維修 — 12年在地維修經驗
        </div>
      </div>
    </footer>
  )
}
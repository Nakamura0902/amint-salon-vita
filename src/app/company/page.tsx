import Link from "next/link";

const products = [
  {
    name: "Refine SurReal",
    type: "美容機器",
    desc: "業務用最先端マシン。EMS・ラジオ波・キャビテーション・フェイスソニック・イオン導入など10の機能を搭載。顔・ボディのトータルトリートメントが可能です。",
    color: "bg-salon-primary/10 border-salon-primary/20",
  },
  {
    name: "DIFACE COSMETICS",
    type: "スキンケア",
    desc: "エイジングケアコスメタイプ。ダブル幹細胞で内側からケアするプレミアムスキンケアライン。",
    color: "bg-salon-secondary/10 border-salon-secondary/20",
  },
  {
    name: "LUVIA RUSHE COSMETICS",
    type: "スキンケア",
    desc: "多機能コスメタイプ。一流品質にこだわった高機能コスメシリーズ。",
    color: "bg-salon-accent/30 border-salon-accent/40",
  },
  {
    name: "A-mint Cosmetics",
    type: "スキンケア",
    desc: "自然派コスメタイプ。シリーズ使用でナチュラルケアを実現するオーガニック志向のライン。",
    color: "bg-green-50 border-green-100",
  },
  {
    name: "BODYWAVE EX",
    type: "美容機器",
    desc: "全身のボディコントロールにアプローチする業務用マシン。むくみや筋肉疲労のケアに活躍。",
    color: "bg-salon-primary/10 border-salon-primary/20",
  },
  {
    name: "Dr.ENZYME NMN / Fucoidan",
    type: "サプリメント",
    desc: "NMNサプリメントやフコイダンシリーズなど、内側からの美と健康をサポートする機能性食品。",
    color: "bg-yellow-50 border-yellow-100",
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-salon-light py-16 px-4 text-center">
        <p className="text-xs tracking-widest uppercase text-salon-subtext mb-2">Company</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-salon-text">本社情報</h1>
        <div className="divider" />
      </section>

      {/* HQ Overview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="section-subtitle">Head Office</p>
          <h2 className="section-title">株式会社アミン</h2>
          <div className="divider" />

          <div className="mt-12 bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Philosophy banner */}
            <div className="bg-gradient-to-r from-salon-primary to-salon-secondary px-8 py-6 text-white text-center">
              <p className="text-xs tracking-widest uppercase text-white/70 mb-1">
                Corporate Philosophy
              </p>
              <p className="font-serif text-2xl sm:text-3xl">信頼と感謝</p>
            </div>

            {/* Details */}
            <div className="p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-salon-subtext tracking-widest uppercase mb-1">会社名</p>
                <p className="font-serif text-lg text-salon-text">株式会社アミン</p>
              </div>
              <div>
                <p className="text-xs text-salon-subtext tracking-widest uppercase mb-1">ウェブサイト</p>
                <a
                  href="https://amint.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-salon-primary hover:text-salon-secondary transition-colors"
                >
                  https://amint.co.jp/
                </a>
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs text-salon-subtext tracking-widest uppercase mb-1">事業内容</p>
                <ul className="text-salon-text space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-salon-primary mt-1">•</span>
                    美容専門機器の製造・販売
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-salon-primary mt-1">•</span>
                    美容・健康・ビジネス等講座の企画および催行
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-salon-primary mt-1">•</span>
                    各種イベント・セミナーの企画・運営
                  </li>
                </ul>
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs text-salon-subtext tracking-widest uppercase mb-1">加盟団体</p>
                <p className="text-salon-text">
                  日本美容健康医療協会 / 日本全身美容協会
                </p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs text-salon-subtext tracking-widest uppercase mb-2">ミッション</p>
                <p className="text-salon-subtext leading-relaxed">
                  「信頼と感謝」を基本として、商品販売・普及活動・イベント・セミナー事業を展開。
                  美と健康を通して、すべての人が豊かに生きることをサポートします。
                  売上の一部を日本赤十字社などへ寄付し、医療・復興支援にも取り組んでいます。
                </p>
              </div>
            </div>

            <div className="px-8 pb-8 text-center">
              <a
                href="https://amint.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                株式会社アミン 公式サイトへ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products/Brands */}
      <section className="py-20 px-4 bg-salon-light">
        <div className="max-w-6xl mx-auto">
          <p className="section-subtitle">Products & Equipment</p>
          <h2 className="section-title">導入機器・取り扱いブランド</h2>
          <div className="divider" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {products.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border p-6 ${p.color}`}
              >
                <p className="text-xs text-salon-subtext mb-1 tracking-widest uppercase">
                  {p.type}
                </p>
                <h3 className="font-serif text-lg text-salon-text mb-3">{p.name}</h3>
                <p className="text-sm text-salon-subtext leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relationship */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl text-salon-text mb-4">
            AMINT Salon Vita と株式会社アミンの関係
          </h2>
          <p className="text-salon-subtext leading-relaxed">
            AMINT Salon Vita は、株式会社アミンの理念「信頼と感謝」のもと、
            同社が提供する最新美容機器・高品質コスメを導入した地域密着型のサロンです。
            本社の充実したサポート体制のもと、お客様に最高の美容体験をお届けします。
          </p>
          <div className="mt-8">
            <Link href="/reserve" className="btn-primary">
              サロンを予約する
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

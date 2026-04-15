import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: "✦",
    title: "ハンドマッサージ",
    desc: "全身・フェイス・ヘッド・フット。熟練のセラピストによる丁寧な施術で、心身の疲れを癒します。",
  },
  {
    icon: "✦",
    title: "最新美容機器",
    desc: "Refine SurRealをはじめとした最先端の業務用美容機器で、内側から輝く美しさをサポートします。",
  },
  {
    icon: "✦",
    title: "高品質コスメ",
    desc: "DIFACE・LUVIA RUSHE・A-mint Cosmetics など、厳選されたブランドコスメをご用意しています。",
  },
];

const menus = [
  {
    name: "フェイス SurReal",
    time: "40分〜",
    desc: "フェイスソニック・EMS・イオン導入を組み合わせた顔専用の総合トリートメント。",
    tag: "人気No.1",
  },
  {
    name: "ボディ SurReal",
    time: "60分〜",
    desc: "キャビテーション・ラジオ波・セルラーボディで、むくみ・セルライトにアプローチ。",
    tag: "おすすめ",
  },
  {
    name: "トリプル複合ボディ",
    time: "60分〜",
    desc: "Wボディソニック × A・B × キャビテーション × EMS の「インパクト・トリートメント」。",
    tag: "",
  },
  {
    name: "全身ハンドリンパ",
    time: "60分〜",
    desc: "経験豊富なセラピストによる全身マッサージで、リンパの流れを整えます。",
    tag: "",
  },
];

const galleryImages = [
  { src: "/images/salon-room-1.jpg", alt: "サロン施術室" },
  { src: "/images/salon-room-2.jpg", alt: "トリートメントベッド" },
  { src: "/images/treatment-face.jpg", alt: "フェイストリートメント" },
  { src: "/images/treatment-body.jpg", alt: "ボディトリートメント" },
  { src: "/images/treatment-leg.jpg", alt: "レッグトリートメント" },
  { src: "/images/treatment-head.jpg", alt: "ヘッドトリートメント" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="AMINT Salon Vita サロン内観"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-salon-text/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-salon-accent">
            AMINT Salon Vita
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-snug mb-4">
            美と健康を通して、<br />
            <span className="text-salon-accent">豊かさ</span>を目指す。
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-md mx-auto">
            北海道石狩市の美容・健康サロン。<br />
            最新機器と丁寧な施術で、内側から輝く美しさを。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve" className="btn-primary">
              ご予約はこちら
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-full transition-all duration-300 hover:bg-white hover:text-salon-text"
            >
              メニューを見る
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-0.5 h-10 bg-white/50 mx-auto" />
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="section-subtitle">Features</p>
          <h2 className="section-title">AMINT Salon Vita の特徴</h2>
          <div className="divider" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((f) => (
              <div key={f.title} className="card p-8 text-center">
                <div className="text-salon-primary text-3xl mb-4">{f.icon}</div>
                <h3 className="font-serif text-xl text-salon-text mb-3">
                  {f.title}
                </h3>
                <p className="text-sm text-salon-subtext leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MENU PICKUP ===== */}
      <section className="py-20 px-4 bg-salon-light">
        <div className="max-w-6xl mx-auto">
          <p className="section-subtitle">Menu</p>
          <h2 className="section-title">おすすめメニュー</h2>
          <div className="divider" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {menus.map((m) => (
              <div key={m.name} className="card p-6 flex gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-2 mb-2">
                    <h3 className="font-serif text-lg text-salon-text">
                      {m.name}
                    </h3>
                    {m.tag && (
                      <span className="shrink-0 text-xs bg-salon-accent text-salon-text px-2 py-0.5 rounded-full">
                        {m.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-salon-primary mb-2">
                    所要時間: {m.time}
                  </p>
                  <p className="text-sm text-salon-subtext leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/menu" className="btn-outline">
              全メニューを見る
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="section-subtitle">Gallery</p>
          <h2 className="section-title">ギャラリー</h2>
          <div className="divider" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-12">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-salon-text/0 group-hover:bg-salon-text/20 transition-all duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-outline">
              もっと見る
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 px-4 bg-gradient-to-r from-salon-primary to-salon-secondary">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="font-serif text-3xl sm:text-4xl mb-4">
            まずはお気軽にご予約を
          </h2>
          <p className="text-white/80 mb-8">
            ご希望の日時・メニューをフォームよりお知らせください。<br />
            担当者よりご連絡いたします。
          </p>
          <Link
            href="/reserve"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-salon-text font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            ご予約フォームへ
          </Link>
        </div>
      </section>

      {/* ===== ACCESS SUMMARY ===== */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="section-subtitle">Access</p>
          <h2 className="section-title">アクセス</h2>
          <div className="divider" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-center">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-md h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.7265936143667!2d141.3098238754309!3d43.17326287112894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2444a9636e3d%3A0x80ad07b3c151dc67!2z44CSMDYxLTMyODIg5YyX5rW36YGT55-z54up5biC6Iqx55WU77yS5p2h77yR5LiB55uu77yR77yS77yZ!5e0!3m2!1sja!2sjp!4v1776259006336!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AMINT Salon Vita アクセスマップ"
              />
            </div>
            {/* Info */}
            <div className="space-y-4">
              <div>
                <p className="text-xs text-salon-subtext tracking-widest uppercase mb-1">
                  Address
                </p>
                <p className="font-serif text-lg text-salon-text">
                  〒061-3243<br />
                  北海道石狩市花畔2条1丁目129
                </p>
              </div>
              <div>
                <p className="text-xs text-salon-subtext tracking-widest uppercase mb-1">
                  Tel
                </p>
                <a
                  href="tel:08040400484"
                  className="font-serif text-xl text-salon-primary hover:text-salon-secondary transition-colors"
                >
                  080-4040-0484
                </a>
              </div>
              <div>
                <p className="text-xs text-salon-subtext tracking-widest uppercase mb-1">
                  Hours
                </p>
                <p className="text-salon-text">
                  営業時間：管理者と要相談<br />
                  定休日：不定
                </p>
              </div>
              <div>
                <p className="text-xs text-salon-subtext tracking-widest uppercase mb-1">
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/SALON_VITA1030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-salon-primary hover:text-salon-secondary transition-colors"
                >
                  @SALON_VITA1030
                </a>
              </div>
              <Link href="/access" className="btn-outline inline-flex mt-2">
                詳細アクセスを見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

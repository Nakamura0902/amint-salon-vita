import Image from "next/image";
import Link from "next/link";

const strengths = [
  {
    no: "01",
    title: "最新の美容機器",
    desc: "業務用最先端マシン「Refine SurReal」を導入。EMS・ラジオ波・キャビテーション・イオン導入など10の機能を搭載し、一台で全身のトータルケアが可能です。",
  },
  {
    no: "02",
    title: "丁寧なハンドケア",
    desc: "経験豊富なセラピストによる心を込めた施術。全身・フェイス・ヘッド・フット・レッグと幅広い部位に対応し、お客様一人ひとりのお悩みに合わせてご提案します。",
  },
  {
    no: "03",
    title: "内外からのトータルケア",
    desc: "施術だけでなく、高品質なコスメ・サプリメントもご用意。外側からの美容機器ケアと内側からの栄養サポートで、根本からの美しさをお届けします。",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/salon-room-2.jpg"
            alt="サロン内観"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-salon-text/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <p className="text-xs tracking-widest uppercase text-salon-accent mb-2">About</p>
          <h1 className="font-serif text-3xl sm:text-4xl">サロンについて</h1>
        </div>
      </section>

      {/* Concept */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-subtitle">Concept</p>
          <h2 className="section-title">コンセプト</h2>
          <div className="divider" />
          <p className="mt-10 text-salon-subtext leading-loose text-base sm:text-lg max-w-2xl mx-auto">
            AMINT Salon Vita は、「美と健康を通して豊かさを目指す」という理念のもと、
            北海道石狩市に生まれた美容・健康サロンです。<br /><br />
            最新の美容機器による高品質なトリートメントと、
            セラピストによる丁寧なハンドケアを組み合わせることで、
            お客様一人ひとりの内側から輝く美しさをサポートします。<br /><br />
            施術の時間が、日常の喧騒から離れ、
            自分自身を大切にするひとときになれるよう。
            スタッフ一同、心を込めてお迎えいたします。
          </p>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 px-4 bg-salon-light">
        <div className="max-w-6xl mx-auto">
          <p className="section-subtitle">Strengths</p>
          <h2 className="section-title">3つの特徴</h2>
          <div className="divider" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {strengths.map((s) => (
              <div key={s.no} className="card p-8">
                <div className="font-serif text-5xl text-salon-accent/40 mb-4">
                  {s.no}
                </div>
                <h3 className="font-serif text-xl text-salon-text mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-salon-subtext leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="section-subtitle">Salon</p>
          <h2 className="section-title">サロン内観</h2>
          <div className="divider" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {[
              { src: "/images/salon-room-1.jpg", alt: "施術室1" },
              { src: "/images/salon-room-2.jpg", alt: "施術室2" },
              { src: "/images/salon-room-3.jpg", alt: "施術室3" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="font-serif text-2xl text-salon-text mb-4">
          まずはお気軽にご予約ください
        </h2>
        <p className="text-salon-subtext mb-8">
          お客様のご要望に合わせてご提案いたします。
        </p>
        <Link href="/reserve" className="btn-primary">
          ご予約フォームへ
        </Link>
      </section>
    </>
  );
}

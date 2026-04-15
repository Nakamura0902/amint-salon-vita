"use client";

import Link from "next/link";
import { useState } from "react";

type Category = "all" | "face" | "body" | "head" | "device";

const menus = [
  // Face
  {
    category: "face" as Category,
    name: "フェイス SurReal",
    time: "40分〜",
    price: "お問い合わせください",
    desc: "フェイスソニック・EMS・イオン導入を組み合わせた顔専用トータルトリートメント。",
    tag: "人気No.1",
  },
  {
    category: "face" as Category,
    name: "クールフェイス",
    time: "30分〜",
    price: "お問い合わせください",
    desc: "冷却効果でお肌を引き締め、毛穴の目立ちにくいすっきりとした素肌へ。",
    tag: "",
  },
  {
    category: "face" as Category,
    name: "パーフェクトフェイシャル",
    time: "50分〜",
    price: "お問い合わせください",
    desc: "フェイスソニック × EMS の複合トリートメントで、リフトアップ効果を追求。",
    tag: "",
  },
  // Body
  {
    category: "body" as Category,
    name: "ボディ SurReal",
    time: "60分〜",
    price: "お問い合わせください",
    desc: "キャビテーション・ラジオ波・セルラーボディで、むくみ・セルライトに集中アプローチ。",
    tag: "おすすめ",
  },
  {
    category: "body" as Category,
    name: "トリプル複合ボディ",
    time: "60分〜",
    price: "お問い合わせください",
    desc: "Wボディソニック × A・B × キャビテーション × EMSの「インパクト・トリートメント」。",
    tag: "",
  },
  {
    category: "body" as Category,
    name: "全身ハンドリンパ",
    time: "60分〜",
    price: "お問い合わせください",
    desc: "全身のリンパの流れを整え、老廃物を流す本格ハンドマッサージ。",
    tag: "",
  },
  {
    category: "body" as Category,
    name: "レッグスペシャル",
    time: "40分〜",
    price: "お問い合わせください",
    desc: "脚全体のむくみ・冷えにアプローチ。ふくらはぎ・太もも・足裏を重点ケア。",
    tag: "",
  },
  // Head
  {
    category: "head" as Category,
    name: "ヘッドスパ",
    time: "30分〜",
    price: "お問い合わせください",
    desc: "頭皮マッサージで血行を促進。日頃のストレスや頭部の疲れをほぐします。",
    tag: "",
  },
  {
    category: "head" as Category,
    name: "ヘッド＋ネック",
    time: "40分〜",
    price: "お問い合わせください",
    desc: "頭部から首・肩にかけて丁寧にほぐすコース。デスクワークの方に特に人気。",
    tag: "",
  },
  // Device
  {
    category: "device" as Category,
    name: "Refine SurReal 体験コース",
    time: "30分〜",
    price: "お問い合わせください",
    desc: "初めての方向け。最新美容機器「Refine SurReal」の効果を体験できる入門コース。",
    tag: "初回限定",
  },
  {
    category: "device" as Category,
    name: "BODYWAVE EX",
    time: "20分〜",
    price: "お問い合わせください",
    desc: "ボディウェーブEXによる全身の筋肉へのアプローチ。流した後のすっきり感が魅力。",
    tag: "",
  },
];

const tabs: { key: Category; label: string }[] = [
  { key: "all", label: "すべて" },
  { key: "face", label: "フェイス" },
  { key: "body", label: "ボディ" },
  { key: "head", label: "ヘッド" },
  { key: "device", label: "美容機器" },
];

export default function MenuPage() {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? menus : menus.filter((m) => m.category === active);

  return (
    <>
      {/* Page Header */}
      <section className="bg-salon-light py-16 px-4 text-center">
        <p className="text-xs tracking-widest uppercase text-salon-subtext mb-2">Menu</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-salon-text">
          メニュー・料金
        </h1>
        <div className="divider" />
      </section>

      {/* Notice */}
      <div className="max-w-3xl mx-auto px-4 pt-10">
        <div className="bg-salon-accent/20 border border-salon-accent rounded-xl p-4 text-sm text-salon-subtext text-center">
          料金はメニューの組み合わせやコース内容により異なります。
          詳しくはお電話またはInstagramよりお気軽にお問い合わせください。
        </div>
      </div>

      {/* Tabs */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === tab.key
                    ? "bg-salon-primary text-white shadow-sm"
                    : "bg-white text-salon-subtext border border-salon-light hover:border-salon-primary hover:text-salon-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((m) => (
              <div key={m.name} className="card p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-lg text-salon-text leading-tight">
                    {m.name}
                  </h3>
                  {m.tag && (
                    <span className="shrink-0 ml-2 text-xs bg-salon-accent text-salon-text px-2 py-0.5 rounded-full">
                      {m.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs text-salon-primary mb-1">
                  所要時間: {m.time}
                </p>
                <p className="text-xs text-salon-subtext mb-3">{m.price}</p>
                <p className="text-sm text-salon-subtext leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-salon-light text-center">
        <h2 className="font-serif text-2xl text-salon-text mb-4">
          ご予約・お問い合わせ
        </h2>
        <p className="text-salon-subtext mb-8">
          ご希望のメニューやご質問はお気軽にどうぞ。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/reserve" className="btn-primary">
            予約フォームへ
          </Link>
          <a href="tel:08040400484" className="btn-outline">
            080-4040-0484
          </a>
        </div>
      </section>
    </>
  );
}

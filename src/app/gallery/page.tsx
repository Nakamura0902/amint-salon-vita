"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryCategory = "all" | "salon" | "treatment" | "product";

const images = [
  { src: "/images/salon-room-1.jpg", alt: "施術室", category: "salon" as GalleryCategory },
  { src: "/images/salon-room-2.jpg", alt: "トリートメントベッド", category: "salon" as GalleryCategory },
  { src: "/images/salon-room-3.jpg", alt: "サロン内観", category: "salon" as GalleryCategory },
  { src: "/images/treatment-face.jpg", alt: "フェイストリートメント", category: "treatment" as GalleryCategory },
  { src: "/images/treatment-body.jpg", alt: "ボディトリートメント", category: "treatment" as GalleryCategory },
  { src: "/images/treatment-leg.jpg", alt: "レッグトリートメント", category: "treatment" as GalleryCategory },
  { src: "/images/treatment-head.jpg", alt: "ヘッドスパ", category: "treatment" as GalleryCategory },
  { src: "/images/treatment-arm.jpg", alt: "アームトリートメント", category: "treatment" as GalleryCategory },
  { src: "/images/treatment-surreal.jpg", alt: "Refine SurReal", category: "treatment" as GalleryCategory },
  { src: "/images/product-diface.jpg", alt: "DIFACEコスメ", category: "product" as GalleryCategory },
  { src: "/images/product-cosmetics.jpg", alt: "コスメラインナップ", category: "product" as GalleryCategory },
  { src: "/images/product-supplement.jpg", alt: "サプリメント", category: "product" as GalleryCategory },
];

const tabs: { key: GalleryCategory; label: string }[] = [
  { key: "all", label: "すべて" },
  { key: "salon", label: "店内" },
  { key: "treatment", label: "施術" },
  { key: "product", label: "商品" },
];

export default function GalleryPage() {
  const [active, setActive] = useState<GalleryCategory>("all");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const filtered = active === "all" ? images : images.filter((img) => img.category === active);

  return (
    <>
      {/* Page Header */}
      <section className="bg-salon-light py-16 px-4 text-center">
        <p className="text-xs tracking-widest uppercase text-salon-subtext mb-2">Gallery</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-salon-text">ギャラリー</h1>
        <div className="divider" />
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
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

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {filtered.map((img) => (
              <button
                key={img.src}
                onClick={() => setLightbox(img)}
                className="relative aspect-square rounded-xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-salon-primary"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-salon-text/0 group-hover:bg-salon-text/30 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[80vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={900}
              height={600}
              className="object-contain w-full h-full"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="閉じる"
            >
              ✕
            </button>
            <p className="absolute bottom-3 left-0 right-0 text-center text-white/80 text-sm">
              {lightbox.alt}
            </p>
          </div>
        </div>
      )}

      {/* Instagram CTA */}
      <section className="py-16 px-4 text-center">
        <p className="text-salon-subtext mb-2">最新の施術写真はInstagramでも公開中</p>
        <a
          href="https://www.instagram.com/SALON_VITA1030"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-salon-primary hover:text-salon-secondary font-medium transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          @SALON_VITA1030 をフォローする
        </a>
      </section>
    </>
  );
}

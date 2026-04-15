import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-salon-text text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl mb-1 text-salon-accent">
              AMINT Salon Vita
            </h3>
            <p className="text-xs text-gray-400 mb-4">アミント サロン ウィータ</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              美と健康を通して、<br />
              豊かさを目指す。
            </p>
            <a
              href="https://www.instagram.com/SALON_VITA1030"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-salon-accent hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @SALON_VITA1030
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-sm text-salon-accent mb-4 tracking-widest uppercase">
              Menu
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "サロンについて" },
                { href: "/menu", label: "メニュー・料金" },
                { href: "/gallery", label: "ギャラリー" },
                { href: "/company", label: "本社情報" },
                { href: "/access", label: "アクセス" },
                { href: "/reserve", label: "ご予約" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-salon-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm text-salon-accent mb-4 tracking-widest uppercase">
              Access
            </h4>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>〒061-3243<br />北海道石狩市花畔2条1丁目129</p>
              <p>
                <a
                  href="tel:08040400484"
                  className="hover:text-salon-accent transition-colors"
                >
                  080-4040-0484
                </a>
              </p>
              <p className="text-gray-500">営業時間：管理者と要相談</p>
              <p className="text-gray-500">定休日：不定</p>
            </address>
            <Link
              href="/reserve"
              className="mt-4 inline-flex items-center gap-2 text-sm text-salon-accent border border-salon-accent px-4 py-2 rounded-full hover:bg-salon-accent hover:text-salon-text transition-all duration-300"
            >
              ご予約はこちら
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} AMINT Salon Vita. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Powered by{" "}
            <a
              href="https://amint.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              株式会社アミン
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function AccessPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-salon-light py-16 px-4 text-center">
        <p className="text-xs tracking-widest uppercase text-salon-subtext mb-2">Access</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-salon-text">アクセス</h1>
        <div className="divider" />
      </section>

      {/* Map + Info */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-md h-80 lg:h-full min-h-72">
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
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-salon-text mb-6">
                AMINT Salon Vita
              </h2>
              <dl className="space-y-5">
                <div>
                  <dt className="text-xs text-salon-subtext tracking-widest uppercase mb-1">
                    住所
                  </dt>
                  <dd className="text-salon-text">
                    〒061-3243<br />
                    北海道石狩市花畔2条1丁目129
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-salon-subtext tracking-widest uppercase mb-1">
                    電話番号
                  </dt>
                  <dd>
                    <a
                      href="tel:08040400484"
                      className="text-xl font-serif text-salon-primary hover:text-salon-secondary transition-colors"
                    >
                      080-4040-0484
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-salon-subtext tracking-widest uppercase mb-1">
                    営業時間
                  </dt>
                  <dd className="text-salon-text">
                    管理者と要相談<br />
                    <span className="text-sm text-salon-subtext">
                      ご予約の際にご希望の日時をお知らせください
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-salon-subtext tracking-widest uppercase mb-1">
                    定休日
                  </dt>
                  <dd className="text-salon-text">不定休</dd>
                </div>
                <div>
                  <dt className="text-xs text-salon-subtext tracking-widest uppercase mb-1">
                    Instagram
                  </dt>
                  <dd>
                    <a
                      href="https://www.instagram.com/SALON_VITA1030"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-salon-primary hover:text-salon-secondary transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                      @SALON_VITA1030
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/reserve" className="btn-primary text-center">
                ご予約はこちら
              </Link>
              <a
                href="https://maps.google.com/?q=北海道石狩市花畔2条1丁目129"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-center"
              >
                Googleマップで開く
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="pb-16 px-4">
        <div className="max-w-3xl mx-auto bg-salon-accent/20 border border-salon-accent rounded-2xl p-6 text-center">
          <p className="text-salon-subtext text-sm leading-relaxed">
            ご予約・お問い合わせはフォームまたはお電話にて承っております。<br />
            初めての方もお気軽にご連絡ください。スタッフ一同、心よりお待ちしております。
          </p>
        </div>
      </section>
    </>
  );
}

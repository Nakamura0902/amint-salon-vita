import ReserveForm from "@/components/reserve/ReserveForm";

export default function ReservePage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-salon-light py-16 px-4 text-center">
        <p className="text-xs tracking-widest uppercase text-salon-subtext mb-2">Reservation</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-salon-text">ご予約</h1>
        <div className="divider" />
        <p className="mt-4 text-salon-subtext text-sm max-w-md mx-auto">
          ご希望の日時・メニューをお知らせください。
          後ほどご連絡を差し上げます。
        </p>
      </section>

      {/* Flow */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-0 text-xs text-salon-subtext">
            {[
              { step: "01", label: "フォーム入力" },
              { step: "02", label: "自動確認メール" },
              { step: "03", label: "ご連絡・日程確定" },
              { step: "04", label: "ご来店" },
            ].map((s, i, arr) => (
              <div key={s.step} className="flex items-center">
                <div className="flex flex-col items-center gap-1 px-2 sm:px-4">
                  <div className="w-8 h-8 rounded-full bg-salon-primary text-white flex items-center justify-center font-serif text-xs font-bold">
                    {s.step}
                  </div>
                  <span className="text-center leading-tight whitespace-nowrap">{s.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-4 sm:w-8 h-0.5 bg-salon-light shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-10 pb-20 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-6 sm:p-10">
          <h2 className="font-serif text-xl text-salon-text mb-6 text-center">
            予約フォーム
          </h2>
          <ReserveForm />
        </div>

        {/* Alternative contact */}
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <p className="text-sm text-salon-subtext mb-3">
            お電話でのご予約・お問い合わせも承っています
          </p>
          <a
            href="tel:08040400484"
            className="inline-flex items-center gap-2 text-salon-primary hover:text-salon-secondary font-serif text-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            080-4040-0484
          </a>
        </div>
      </section>
    </>
  );
}

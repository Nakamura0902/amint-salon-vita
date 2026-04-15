import Link from "next/link";

export default function ThanksPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-salon-accent/30 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-salon-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl text-salon-text mb-3">
          ご予約を受け付けました
        </h1>
        <div className="divider" />
        <p className="text-salon-subtext mt-6 leading-relaxed">
          ご入力いただいたメールアドレスに確認メールをお送りしました。
          <br /><br />
          担当者より日程のご確認ご連絡をいたしますので、
          しばらくお待ちください。
          <br /><br />
          お急ぎの場合は、お電話またはInstagramよりご連絡ください。
        </p>

        <div className="mt-8 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:08040400484"
              className="btn-outline text-sm"
            >
              080-4040-0484
            </a>
            <a
              href="https://www.instagram.com/SALON_VITA1030"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm"
            >
              Instagram でDM
            </a>
          </div>
          <Link href="/" className="block text-sm text-salon-subtext hover:text-salon-primary transition-colors mt-4">
            ← トップページに戻る
          </Link>
        </div>
      </div>
    </section>
  );
}

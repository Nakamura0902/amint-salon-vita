import { prisma } from "@/lib/db";
import { getSession } from "@/lib/session";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { Status } from "@/generated/prisma/client";
import StatusUpdateForm from "./StatusUpdateForm";

const statusLabels: Record<Status, { label: string; color: string }> = {
  PENDING: { label: "未確認", color: "bg-yellow-100 text-yellow-800" },
  CONFIRMED: { label: "確定", color: "bg-green-100 text-green-800" },
  CANCELLED: { label: "キャンセル", color: "bg-red-100 text-red-800" },
};

export default async function ReservationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getSession();
  if (!session.isAdmin) redirect("/admin/login");

  const { id } = await params;
  const reservation = await prisma.reservation.findUnique({
    where: { id: Number(id) },
  });

  if (!reservation) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← 一覧に戻る
            </Link>
            <span className="text-gray-300">/</span>
            <span className="font-serif text-lg text-salon-text">
              予約詳細 #{reservation.id}
            </span>
          </div>
          <form action="/api/admin/logout" method="POST">
            <button type="submit" className="text-xs text-gray-500 hover:text-red-500 transition-colors">
              ログアウト
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Details */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-salon-text">{reservation.name} 様</h2>
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  statusLabels[reservation.status].color
                }`}
              >
                {statusLabels[reservation.status].label}
              </span>
            </div>

            <dl className="space-y-4">
              {[
                { label: "メールアドレス", value: reservation.email },
                { label: "電話番号", value: reservation.phone },
                { label: "希望メニュー", value: reservation.service },
                {
                  label: "希望日",
                  value: new Date(reservation.wishDate).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    weekday: "short",
                  }),
                },
                { label: "希望時間帯", value: reservation.wishTime },
                { label: "ご要望・備考", value: reservation.message || "（なし）" },
                {
                  label: "受付日時",
                  value: new Date(reservation.createdAt).toLocaleString("ja-JP"),
                },
              ].map((item) => (
                <div key={item.label} className="grid grid-cols-3 gap-2 py-3 border-b border-gray-50 last:border-0">
                  <dt className="text-xs text-gray-400 tracking-wide pt-0.5">
                    {item.label}
                  </dt>
                  <dd className="col-span-2 text-sm text-salon-text">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Quick contact */}
            <div className="mt-6 flex gap-3">
              <a
                href={`mailto:${reservation.email}`}
                className="btn-outline text-xs px-4 py-2"
              >
                メールを送る
              </a>
              <a
                href={`tel:${reservation.phone}`}
                className="btn-outline text-xs px-4 py-2"
              >
                電話する
              </a>
            </div>
          </div>

          {/* Status Update */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="font-serif text-lg text-salon-text mb-4">
              ステータス変更
            </h3>
            <StatusUpdateForm
              id={reservation.id}
              currentStatus={reservation.status}
              email={reservation.email}
              name={reservation.name}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

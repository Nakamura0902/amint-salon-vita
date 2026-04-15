import { prisma } from "@/lib/db";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Status } from "@/generated/prisma/client";

const statusLabels: Record<Status, { label: string; color: string }> = {
  PENDING: { label: "未確認", color: "bg-yellow-100 text-yellow-800" },
  CONFIRMED: { label: "確定", color: "bg-green-100 text-green-800" },
  CANCELLED: { label: "キャンセル", color: "bg-red-100 text-red-800" },
};

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const session = await getSession();
  if (!session.isAdmin) redirect("/admin/login");

  const params = await searchParams;
  const filterStatus = params.status as Status | undefined;

  const reservations = await prisma.reservation.findMany({
    where: filterStatus ? { status: filterStatus } : undefined,
    orderBy: { createdAt: "desc" },
  });

  const counts = await prisma.reservation.groupBy({
    by: ["status"],
    _count: { _all: true },
  });

  const countMap = counts.reduce(
    (acc, c) => ({ ...acc, [c.status]: c._count._all }),
    {} as Record<Status, number>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              ← サイトに戻る
            </Link>
            <span className="text-gray-300">/</span>
            <h1 className="font-serif text-lg text-salon-text">管理画面</h1>
          </div>
          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="text-xs text-gray-500 hover:text-red-500 transition-colors"
            >
              ログアウト
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {(
            [
              { key: undefined, label: "合計", color: "border-salon-primary" },
              { key: "PENDING" as Status, label: "未確認", color: "border-yellow-400" },
              { key: "CONFIRMED" as Status, label: "確定", color: "border-green-400" },
              { key: "CANCELLED" as Status, label: "キャンセル", color: "border-red-400" },
            ] as { key: Status | undefined; label: string; color: string }[]
          ).map((s) => (
            <Link
              key={s.label}
              href={s.key ? `/admin?status=${s.key}` : "/admin"}
              className={`bg-white rounded-xl p-4 border-l-4 ${s.color} shadow-sm hover:shadow-md transition-shadow`}
            >
              <p className="text-2xl font-serif text-salon-text">
                {s.key ? (countMap[s.key] ?? 0) : reservations.length === 0 ? 0 : Object.values(countMap).reduce((a, b) => a + b, 0)}
              </p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </Link>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { key: "", label: "すべて" },
            { key: "PENDING", label: "未確認" },
            { key: "CONFIRMED", label: "確定" },
            { key: "CANCELLED", label: "キャンセル" },
          ].map((tab) => (
            <Link
              key={tab.key}
              href={tab.key ? `/admin?status=${tab.key}` : "/admin"}
              className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                (filterStatus ?? "") === tab.key
                  ? "bg-salon-primary text-white"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-salon-primary hover:text-salon-primary"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {reservations.length === 0 ? (
            <div className="py-16 text-center text-gray-400">
              予約がありません
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50 text-gray-500 text-xs">
                    <th className="px-4 py-3 text-left">ID</th>
                    <th className="px-4 py-3 text-left">お名前</th>
                    <th className="px-4 py-3 text-left">メニュー</th>
                    <th className="px-4 py-3 text-left">希望日時</th>
                    <th className="px-4 py-3 text-left">ステータス</th>
                    <th className="px-4 py-3 text-left">受付日時</th>
                    <th className="px-4 py-3 text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((r) => (
                    <tr
                      key={r.id}
                      className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-gray-400">#{r.id}</td>
                      <td className="px-4 py-3 font-medium text-salon-text">
                        {r.name}
                      </td>
                      <td className="px-4 py-3 text-gray-600 max-w-[160px] truncate">
                        {r.service}
                      </td>
                      <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                        {new Date(r.wishDate).toLocaleDateString("ja-JP", {
                          month: "2-digit",
                          day: "2-digit",
                        })}{" "}
                        {r.wishTime}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${
                            statusLabels[r.status].color
                          }`}
                        >
                          {statusLabels[r.status].label}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                        {new Date(r.createdAt).toLocaleDateString("ja-JP", {
                          month: "2-digit",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          href={`/admin/${r.id}`}
                          className="text-salon-primary hover:text-salon-secondary text-xs font-medium transition-colors"
                        >
                          詳細 →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

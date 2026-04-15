"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Status } from "@/generated/prisma/client";

interface Props {
  id: number;
  currentStatus: Status;
  email: string;
  name: string;
}

export default function StatusUpdateForm({ id, currentStatus, email, name }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [sendMail, setSendMail] = useState(true);
  const [message, setMessage] = useState("");

  const handleUpdate = async (status: "CONFIRMED" | "CANCELLED") => {
    setLoading(status);
    setMessage("");
    try {
      const res = await fetch(`/api/admin/reservations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, sendMail, email, name }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "更新に失敗しました");
      setMessage(
        status === "CONFIRMED" ? "✓ 予約を確定しました" : "✓ キャンセルしました"
      );
      router.refresh();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "エラーが発生しました");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-xs text-gray-500">
        現在:{" "}
        <span
          className={`font-medium ${
            currentStatus === "CONFIRMED"
              ? "text-green-600"
              : currentStatus === "CANCELLED"
              ? "text-red-500"
              : "text-yellow-600"
          }`}
        >
          {currentStatus === "PENDING"
            ? "未確認"
            : currentStatus === "CONFIRMED"
            ? "確定"
            : "キャンセル"}
        </span>
      </p>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={sendMail}
          onChange={(e) => setSendMail(e.target.checked)}
          className="w-4 h-4 accent-salon-primary"
        />
        <span className="text-xs text-gray-600">お客様に通知メールを送る</span>
      </label>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => handleUpdate("CONFIRMED")}
          disabled={loading !== null || currentStatus === "CONFIRMED"}
          className="w-full py-2.5 rounded-xl bg-green-500 text-white text-sm font-medium hover:bg-green-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {loading === "CONFIRMED" ? "処理中..." : "✓ 確定する"}
        </button>
        <button
          onClick={() => handleUpdate("CANCELLED")}
          disabled={loading !== null || currentStatus === "CANCELLED"}
          className="w-full py-2.5 rounded-xl bg-red-100 text-red-600 text-sm font-medium hover:bg-red-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {loading === "CANCELLED" ? "処理中..." : "✕ キャンセルにする"}
        </button>
      </div>

      {message && (
        <p
          className={`text-xs mt-2 ${
            message.startsWith("✓") ? "text-green-600" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}

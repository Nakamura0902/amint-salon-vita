"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const serviceOptions = [
  "フェイス SurReal",
  "クールフェイス",
  "パーフェクトフェイシャル",
  "ボディ SurReal",
  "トリプル複合ボディ",
  "全身ハンドリンパ",
  "レッグスペシャル",
  "ヘッドスパ",
  "ヘッド＋ネック",
  "Refine SurReal 体験コース（初回）",
  "BODYWAVE EX",
  "その他・ご相談",
];

const timeOptions = ["午前 (10:00〜12:00)", "午後 (13:00〜17:00)", "夕方 (17:00〜20:00)", "要相談"];

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  wishDate: string;
  wishTime: string;
  message: string;
  privacy: boolean;
}

export default function ReserveForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    wishDate: "",
    wishTime: "",
    message: "",
    privacy: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = "お名前を入力してください";
    if (!form.email.trim()) newErrors.email = "メールアドレスを入力してください";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "正しいメールアドレスを入力してください";
    if (!form.phone.trim()) newErrors.phone = "電話番号を入力してください";
    if (!form.service) newErrors.service = "希望メニューを選択してください";
    if (!form.wishDate) newErrors.wishDate = "希望日を選択してください";
    if (!form.wishTime) newErrors.wishTime = "希望時間帯を選択してください";
    if (!form.privacy) newErrors.privacy = "プライバシーポリシーへの同意が必要です";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setServerError("");
    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "エラーが発生しました");
      router.push("/reserve/thanks");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "エラーが発生しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Min date: tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-salon-text mb-1">
          お名前 <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="山田 花子"
          className={`w-full rounded-xl border px-4 py-3 text-salon-text bg-white focus:outline-none focus:ring-2 focus:ring-salon-primary transition-all ${
            errors.name ? "border-red-300" : "border-salon-light"
          }`}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-salon-text mb-1">
          メールアドレス <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@email.com"
          className={`w-full rounded-xl border px-4 py-3 text-salon-text bg-white focus:outline-none focus:ring-2 focus:ring-salon-primary transition-all ${
            errors.email ? "border-red-300" : "border-salon-light"
          }`}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-salon-text mb-1">
          電話番号 <span className="text-red-400">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="090-0000-0000"
          className={`w-full rounded-xl border px-4 py-3 text-salon-text bg-white focus:outline-none focus:ring-2 focus:ring-salon-primary transition-all ${
            errors.phone ? "border-red-300" : "border-salon-light"
          }`}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-medium text-salon-text mb-1">
          希望メニュー <span className="text-red-400">*</span>
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`w-full rounded-xl border px-4 py-3 text-salon-text bg-white focus:outline-none focus:ring-2 focus:ring-salon-primary transition-all appearance-none ${
            errors.service ? "border-red-300" : "border-salon-light"
          }`}
        >
          <option value="">選択してください</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-salon-text mb-1">
            希望日 <span className="text-red-400">*</span>
          </label>
          <input
            type="date"
            name="wishDate"
            value={form.wishDate}
            min={minDate}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 text-salon-text bg-white focus:outline-none focus:ring-2 focus:ring-salon-primary transition-all ${
              errors.wishDate ? "border-red-300" : "border-salon-light"
            }`}
          />
          {errors.wishDate && <p className="mt-1 text-xs text-red-500">{errors.wishDate}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-salon-text mb-1">
            希望時間帯 <span className="text-red-400">*</span>
          </label>
          <select
            name="wishTime"
            value={form.wishTime}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 text-salon-text bg-white focus:outline-none focus:ring-2 focus:ring-salon-primary transition-all appearance-none ${
              errors.wishTime ? "border-red-300" : "border-salon-light"
            }`}
          >
            <option value="">選択してください</option>
            {timeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.wishTime && <p className="mt-1 text-xs text-red-500">{errors.wishTime}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-salon-text mb-1">
          その他ご要望・ご質問
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="アレルギーや体の状態、ご要望などがあればご記入ください。"
          className="w-full rounded-xl border border-salon-light px-4 py-3 text-salon-text bg-white focus:outline-none focus:ring-2 focus:ring-salon-primary transition-all resize-none"
        />
      </div>

      {/* Privacy */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacy"
            checked={form.privacy}
            onChange={handleChange}
            className="mt-1 w-4 h-4 accent-salon-primary"
          />
          <span className="text-sm text-salon-subtext">
            個人情報は予約管理・ご連絡の目的にのみ使用し、第三者に提供することはありません。
            上記に同意して予約を申し込みます。
            <span className="text-red-400 ml-1">*</span>
          </span>
        </label>
        {errors.privacy && <p className="mt-1 text-xs text-red-500">{errors.privacy}</p>}
      </div>

      {/* Server error */}
      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm">
          {serverError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "送信中..." : "予約を申し込む"}
      </button>
    </form>
  );
}

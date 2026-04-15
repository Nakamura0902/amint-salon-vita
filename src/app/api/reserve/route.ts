import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { sendCustomerConfirmationMail, sendAdminNotificationMail } from "@/lib/mail";
import crypto from "crypto";

const reserveSchema = z.object({
  name: z.string().min(1, "お名前は必須です"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  phone: z.string().min(1, "電話番号は必須です"),
  service: z.string().min(1, "希望メニューを選択してください"),
  wishDate: z.string().min(1, "希望日を入力してください"),
  wishTime: z.string().min(1, "希望時間帯を選択してください"),
  message: z.string().optional(),
  privacy: z.boolean().refine((v) => v === true, {
    message: "プライバシーポリシーへの同意が必要です",
  }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = reserveSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return NextResponse.json(
        { error: firstError?.message ?? "入力内容に誤りがあります" },
        { status: 400 }
      );
    }

    const { name, email, phone, service, wishDate, wishTime, message } =
      parsed.data;

    // Generate unique token
    const token = crypto.randomBytes(32).toString("hex");

    // Save to DB
    const reservation = await prisma.reservation.create({
      data: {
        name,
        email,
        phone,
        service,
        wishDate: new Date(wishDate),
        wishTime,
        message: message || null,
        token,
      },
    });

    // Format date for mail
    const formattedDate = new Date(wishDate).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "short",
    });

    const mailData = {
      name,
      email,
      phone,
      service,
      wishDate: formattedDate,
      wishTime,
      message,
    };

    // Send emails (non-blocking - don't fail reservation if mail fails)
    try {
      await Promise.all([
        sendCustomerConfirmationMail(mailData),
        sendAdminNotificationMail(mailData),
      ]);
    } catch (mailError) {
      console.error("Mail sending failed:", mailError);
      // Continue even if mail fails - reservation was saved
    }

    return NextResponse.json({ success: true, id: reservation.id });
  } catch (error) {
    console.error("Reservation error:", error);
    return NextResponse.json(
      { error: "予約の処理中にエラーが発生しました。しばらく後にお試しください。" },
      { status: 500 }
    );
  }
}

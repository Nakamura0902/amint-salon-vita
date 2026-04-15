import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

interface ReservationMailData {
  name: string;
  email: string;
  phone: string;
  service: string;
  wishDate: string;
  wishTime: string;
  message?: string;
}

export async function sendCustomerConfirmationMail(data: ReservationMailData) {
  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: data.email,
    subject: "【AMINT Salon Vita】仮予約を受け付けました",
    text: `
${data.name} 様

この度はご予約いただき、ありがとうございます。
以下の内容で仮予約を受け付けました。
後ほど担当者よりご連絡いたします。

━━━━━━━━━━━━━━━━━━━━━━
■ご予約内容
━━━━━━━━━━━━━━━━━━━━━━
お名前　　: ${data.name} 様
メニュー　: ${data.service}
希望日　　: ${data.wishDate}
希望時間帯: ${data.wishTime}
電話番号　: ${data.phone}
${data.message ? `ご要望　　: ${data.message}` : ""}
━━━━━━━━━━━━━━━━━━━━━━

※ このメールは自動送信されています。
※ ご予約の確定については、別途ご連絡いたします。

ご不明な点はお気軽にお問い合わせください。

━━━━━━━━━━━━━━━━━━━━━━
AMINT Salon Vita
〒061-3243 北海道石狩市花畔2条1丁目129
TEL: 080-4040-0484
Instagram: @SALON_VITA1030
━━━━━━━━━━━━━━━━━━━━━━
    `.trim(),
  });
}

export async function sendAdminNotificationMail(data: ReservationMailData) {
  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: "【新規予約】AMINT Salon Vita に新しいご予約が入りました",
    text: `
新規予約が届きました。
管理画面よりご確認ください。

━━━━━━━━━━━━━━━━━━━━━━
■予約内容
━━━━━━━━━━━━━━━━━━━━━━
お名前　　: ${data.name}
メール　　: ${data.email}
電話番号　: ${data.phone}
メニュー　: ${data.service}
希望日　　: ${data.wishDate}
希望時間帯: ${data.wishTime}
${data.message ? `ご要望　　: ${data.message}` : ""}
━━━━━━━━━━━━━━━━━━━━━━

管理画面: ${process.env.NEXT_PUBLIC_APP_URL}/admin
    `.trim(),
  });
}

export async function sendStatusUpdateMail(
  email: string,
  name: string,
  status: "CONFIRMED" | "CANCELLED"
) {
  const isConfirmed = status === "CONFIRMED";
  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: email,
    subject: isConfirmed
      ? "【AMINT Salon Vita】ご予約が確定しました"
      : "【AMINT Salon Vita】ご予約がキャンセルされました",
    text: `
${name} 様

${
  isConfirmed
    ? "ご予約が確定しました。当日はスタッフ一同お待ちしております。"
    : "誠に恐れ入りますが、ご予約をキャンセルさせていただきました。\nご不明な点がございましたら、お電話またはInstagramよりご連絡ください。"
}

━━━━━━━━━━━━━━━━━━━━━━
AMINT Salon Vita
〒061-3243 北海道石狩市花畔2条1丁目129
TEL: 080-4040-0484
Instagram: @SALON_VITA1030
━━━━━━━━━━━━━━━━━━━━━━
    `.trim(),
  });
}

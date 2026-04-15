import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AMINT Salon Vita | アミント サロン ウィータ",
  description:
    "北海道石狩市の美容・健康サロン。最新の美容機器と丁寧な施術で、美と健康を通した豊かさをご提供します。Refine SurRealをはじめとした高品質なトリートメント。",
  keywords: "美容サロン,エステ,マッサージ,北海道,石狩市,Refine SurReal,ボディケア",
  openGraph: {
    title: "AMINT Salon Vita",
    description: "美と健康を通して、豊かさを目指す。北海道石狩市の美容・健康サロン。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-salon-bg text-salon-text antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

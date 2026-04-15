"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "サロンについて" },
  { href: "/menu", label: "メニュー" },
  { href: "/gallery", label: "ギャラリー" },
  { href: "/company", label: "本社情報" },
  { href: "/access", label: "アクセス" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-salon-light shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-serif text-xl text-salon-text tracking-wider">
              AMINT Salon Vita
            </span>
            <span className="text-xs text-salon-subtext tracking-widest">
              アミント サロン ウィータ
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-salon-subtext hover:text-salon-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reserve"
              className="btn-primary text-sm px-5 py-2"
            >
              ご予約
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-salon-text"
            aria-label="メニューを開く"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-salon-text transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-salon-text transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-salon-text transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-salon-light px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-salon-subtext hover:text-salon-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reserve"
            className="block btn-primary text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            ご予約
          </Link>
        </div>
      )}
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { category } from "@/data";

const footer = category.footer;
const navLinks = footer.navigation;

const contacts: {
  label: string;
  value: string;
  href: string;
  color: string;
  icon: ReactNode;
}[] = [
  {
    label: footer.contacts[0].label,
    value: footer.contacts[0].value,
    href: footer.contacts[0].href,
    color: footer.contacts[0].color,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
        <rect x="3" y="14" width="4.500" height="6" rx="2" fill="currentColor" />
        <rect x="16.500" y="14" width="4.500" height="6" rx="2" fill="currentColor" />
        <path d="M19 20c0 1.500-2 2-5 2" />
      </svg>
    ),
  },
  {
    label: footer.contacts[1].label,
    value: footer.contacts[1].value,
    href: footer.contacts[1].href,
    color: footer.contacts[1].color,
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M3 6.500A1.500 1.500 0 0 1 4.500 5h15A1.500 1.500 0 0 1 21 6.500v.300l-9 6.200-9-6.200v-.300ZM3 9.200v8.300A1.500 1.500 0 0 0 4.500 19h15a1.500 1.500 0 0 0 1.500-1.500V9.200l-8.400 5.800a1 1 0 0 1-1.200 0L3 9.200Z" />
      </svg>
    ),
  },
  {
    label: footer.contacts[2].label,
    value: footer.contacts[2].value,
    href: footer.contacts[2].href,
    color: footer.contacts[2].color,
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <circle cx="8.500" cy="10.500" r="1.200" fill="#12c9b4" />
        <circle cx="12" cy="10.500" r="1.200" fill="#12c9b4" />
        <circle cx="15.500" cy="10.500" r="1.200" fill="#12c9b4" />
      </svg>
    ),
  },
];

const socials: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: footer.socials[0].label,
    href: footer.socials[0].href,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M13.500 21v-7.500h2.600l.4-3h-3V8.600c0-.9.3-1.500 1.600-1.500h1.500V4.400c-.3 0-1.200-.1-2.200-.1-2.300 0-3.900 1.400-3.900 4v2.200H8v3h2.500V21h3Z" />
      </svg>
    ),
  },
  {
    label: footer.socials[1].label,
    href: footer.socials[1].href,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M17.800 3h3.100l-6.800 7.700L22 21h-6.200l-4.900-6.300L5.300 21H2.200l7.300-8.300L2 3h6.400l4.400 5.800L17.800 3Zm-1.100 16.200h1.700L7.400 4.700H5.600l11.100 14.500Z" />
      </svg>
    ),
  },
  {
    label: footer.socials[2].label,
    href: footer.socials[2].href,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.200"
      >
        <rect x="3.500" y="3.500" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.200" cy="6.800" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: footer.socials[3].label,
    href: footer.socials[3].href,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2.800 6.200V18h2.600V9.200H6.800ZM8.100 5.800a1.500 1.500 0 1 0 0 3 1.500 1.500 0 0 0 0-3ZM11 9.200V18h2.600v-4.600c0-1.200.6-2 1.700-2s1.500.8 1.500 2V18h2.600v-5.200c0-2.300-1.200-3.800-3.200-3.800-1.100 0-1.900.5-2.300 1.200V9.200H11Z" />
      </svg>
    ),
  },
  {
    label: footer.socials[4].label,
    href: footer.socials[4].href,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M21.600 7.200a2.500 2.500 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800ZM10 15V9l5.200 3L10 15Z" />
      </svg>
    ),
  },
];

export default function TravelFooter() {

  return (
    <footer data-reveal className="relative isolate overflow-hidden bg-[#0a2a48] text-white">
      {/* Background photo (sunset bay + cliffs) */}
      <Image
        src={footer.background}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#071d38]/55 via-[#0a2a48]/45 to-[#071d38]/60" />
      {/* Slight blur behind logo + text (edges fade out, no visible box) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 backdrop-blur-[4px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 100% at 50% 50%, #000 55%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 65% 100% at 50% 50%, #000 55%, transparent 100%)",
        }}
      />

      <div className="mx-auto flex max-w-[1300px] flex-col items-center px-5 pb-8 pt-8 text-center sm:px-10">
        {/* Logo */}
        <Link href="#home" aria-label={footer.logoAlt}>
          <Image
            src={category.common.site.logo}
            alt={footer.logoAlt}
            width={420}
            height={110}
            className="h-[70px] w-auto sm:h-[88px]"
          />
        </Link>

        {/* Description */}
        <p className="mt-3 max-w-[820px] text-[15px] leading-[1.55] text-white sm:text-[20px]">
          {footer.description}
        </p>

        {/* Contact row */}
        <div className="mt-8 grid w-full grid-cols-3 items-start gap-2 md:flex md:flex-row md:items-center md:justify-center md:gap-0">
          {contacts.map((c, index) => (
            <div key={c.label} className="flex min-w-0 flex-col items-center md:flex-row">
              {index > 0 && (
                <span className="mx-[3vw] hidden h-[44px] w-px bg-white/60 md:block" />
              )}
              <a
                href={c.href}
                className="flex min-w-0 flex-col items-center gap-2 text-center transition-opacity hover:opacity-85 md:flex-row md:gap-4 md:text-left"
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-white shadow-[0_6px_14px_rgba(0,0,0,0.3)] md:h-[56px] md:w-[56px] ${c.color}`}
                >
                  {c.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] leading-tight text-white/90 sm:text-[16px]">
                    {c.label}
                  </span>
                  <span className="block break-all text-[11px] font-bold leading-tight sm:text-[22px] md:break-normal">
                    {c.value}
                  </span>
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full max-w-[780px] bg-white/85" />

        {/* Nav */}
        <nav
          aria-label="Footer"
          className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-6"
        >
          {navLinks.map((link, index) => (
            <div key={link.label} className="flex items-center gap-4 sm:gap-6">
              <Link
                href={link.href}
                className="text-[15px] text-white transition-colors hover:text-[#f5c518] sm:text-[19px]"
              >
                {link.label}
              </Link>
              {index < navLinks.length - 1 && (
                <span
                  aria-hidden="true"
                  className="h-[9px] w-[9px] rounded-full bg-[#f5c518]"
                />
              )}
            </div>
          ))}
        </nav>

        {/* Socials */}
        <div className="mt-6 flex items-center gap-3 sm:gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="grid h-[40px] w-[40px] place-items-center rounded-[10px] bg-white/25 text-white backdrop-blur-sm transition hover:bg-[#f5c518] hover:text-[#0a2a48]"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-6 h-px w-full max-w-[780px] bg-white/85" />

        {/* Copyright */}
        <p className="mt-4 text-[13px] text-white sm:text-[18px]">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
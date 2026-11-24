"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { category } from "@/data";

const navLinks = category.common.navigation;

export default function TravelNavbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => Boolean(el))
      .sort((a, b) => {
        const aTop = a.getBoundingClientRect().top + window.scrollY;
        const bTop = b.getBoundingClientRect().top + window.scrollY;
        return aTop - bTop;
      });

    if (sections.length === 0) return;

    let frame = 0;
    const updateActive = () => {
      frame = 0;
      const marker = window.innerHeight * 0.35;
      let current = sections[0]?.id ?? "home";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) {
          current = section.id;
        }
      }
      setActive(current);
    };
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (!frame) frame = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Close the mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#071d38]/95 shadow-[0_8px_30px_rgba(7,29,56,0.22)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[80px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-[5vw]">
        {/* Logo */}
        <Link href="#home" aria-label="Home" className="flex items-center">
          <Image
            src={category.common.site.logo}
            alt={`${category.common.site.name} travel agency logo`}
            width={220}
            height={60}
            priority
            className="h-[46px] w-auto sm:h-[52px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setActive(link.id ?? "home")}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 text-[16px] font-medium transition-colors ${
                  isActive
                    ? "text-[#f5c518]"
                    : "text-white/90 hover:text-[#f5c518]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 h-[3px] w-full rounded-full bg-[#f5c518]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden rounded-full bg-[#f5c518] px-7 py-2.5 text-[16px] font-bold text-[#1a1a1a] shadow-[0_8px_18px_rgba(245,197,24,0.3)] transition hover:brightness-105 xl:inline-flex"
        >
          Book Now
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="travel-mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-md border border-white/25 text-white xl:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="travel-mobile-menu"
        inert={!open}
        className={`max-h-0 overflow-x-hidden overflow-y-auto overscroll-contain bg-black/70 backdrop-blur-md transition-[max-height,opacity] duration-300 xl:hidden ${
          open ? "max-h-[calc(100svh-80px)] opacity-100" : "opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 py-4 sm:px-8">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActive(link.id ?? "home");
                  setOpen(false);
                }}
                aria-current={isActive ? "page" : undefined}
                className={`border-b border-white/10 py-3 text-[17px] font-medium ${
                  isActive ? "text-[#f5c518]" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#f5c518] px-6 py-3 text-[17px] font-bold text-[#1a1a1a]"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

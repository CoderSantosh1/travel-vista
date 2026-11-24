"use client";

import Image from "next/image";
import Link from "next/link";
import { category } from "@/data";

type Pkg = (typeof category.packages.items)[number];
const packages = category.packages.items;
const packagesContent = category.packages;

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#f5c518]" fill="currentColor">
      <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-[#19b5a5]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function PackageCard({ pkg }: { pkg: Pkg }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[20px] bg-gradient-to-b from-[#0d4048] to-[#08303a] shadow-[0_14px_30px_rgba(8,48,58,0.25)] transition-transform duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-[200px] w-full overflow-hidden rounded-[20px] sm:h-[210px]">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 300px"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <p className="flex items-center gap-1.5 text-[13px] text-white/85">
          <PinIcon />
          {pkg.location}
        </p>

        <h3 className="mt-2 min-h-[56px] text-[20px] font-bold leading-[1.25] text-white">
          {pkg.title}
        </h3>

        <p className="mt-3 flex items-center gap-2 text-[13px] text-white/80">
          <ClockIcon />
          {pkg.duration}
        </p>

        <div className="mt-4 h-px w-full bg-[#19b5a5]/35" />

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="min-w-0 whitespace-nowrap text-white">
            <span className="text-[22px] font-extrabold leading-none">
              {pkg.price}
            </span>
            <span className="ml-1 text-[12px] text-white/70">{packagesContent.perPersonLabel}</span>
          </p>

          <Link
            href="#contact"
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#f5c518] px-3.5 py-2 text-[12px] font-extrabold tracking-[0.3px] text-[#10303a] shadow-[0_6px_14px_rgba(245,197,24,0.3)] transition hover:brightness-105"
          >
            {packagesContent.bookButtonLabel}
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
              <path
                d="M7 17 17 7M9 7h8v8"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function TravelPackages() {
  return (
    <section
      id="packages"
      data-reveal
      className="relative isolate overflow-hidden bg-white py-14 sm:py-16"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-[4vw]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0b3b44] px-5 py-2 text-[13px] font-bold tracking-[0.5px] text-white sm:text-[14px]">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="8" width="18" height="12" rx="2.500" />
              <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18M9 13v2M15 13v2" />
            </svg>
            {packagesContent.eyebrow}
          </span>

          <h2 className="mt-5 text-[clamp(28px,3.6vw,52px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0f2f45]">
            {packagesContent.title}{" "}
            <span className="text-[#19b5a5]">{packagesContent.highlight}</span>
          </h2>

          <p className="mt-3 max-w-[760px] text-[14px] leading-[1.6] text-[#3f4a50] sm:text-[16px]">
            {packagesContent.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
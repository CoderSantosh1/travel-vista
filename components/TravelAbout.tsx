"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { category } from "@/data";

const iconProps = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PinIcon = (
  <svg {...iconProps} className="h-7 w-7">
    <path d="M16 29s9-8 9-15a9 9 0 1 0-18 0c0 7 9 15 9 15Z" />
    <circle cx="16" cy="14" r="3.5" />
  </svg>
);

const HeadsetIcon = (
  <svg {...iconProps} className="h-7 w-7">
    <path d="M5 18v-3a11 11 0 0 1 22 0v3" />
    <rect x="3" y="17" width="6" height="9" rx="2.5" />
    <rect x="23" y="17" width="6" height="9" rx="2.5" />
    <path d="M26 26c0 2.5-3 4-8 4" />
  </svg>
);

const PlaneIcon = (
  <svg {...iconProps} className="h-7 w-7">
    <path d="M28.5 3.5c-1.2-1.200-3.400-.500-4.600.700L19 9 6 6 4 8l9 6-4 4-5-1-1.500 1.500 5 3 3 5L8 28l1.500-1.500-1-5 4-4 6 9 2-2-3-13 4.800-4.800c1.200-1.200 1.900-3.400.700-4.600Z" />
  </svg>
);

const CalendarIcon = (
  <svg {...iconProps} className="h-7 w-7">
    <rect x="4" y="6" width="24" height="22" rx="3" />
    <path d="M4 12h24M10 3v6M22 3v6" />
    <path d="m11 20 3.5 3.5L21 17" />
  </svg>
);

const UsersIcon = (
  <svg {...iconProps} className="h-7 w-7">
    <circle cx="16" cy="11" r="4.5" />
    <path d="M7 27c0-5 4-8 9-8s9 3 9 8" />
    <circle cx="6" cy="14" r="3" />
    <circle cx="26" cy="14" r="3" />
  </svg>
);

const about = category.about;
const featureIcons: Record<string, ReactNode> = { pin: PinIcon, headset: HeadsetIcon };
const statIcons: Record<string, ReactNode> = { plane: PlaneIcon, calendar: CalendarIcon, users: UsersIcon };

export default function TravelAbout() {
  return (
    <section
      id="about"
      data-reveal
      className="relative isolate overflow-hidden bg-white py-14 sm:py-16"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-[4vw] lg:px-[5vw]">
        {/* Left: diagonal image collage */}
        <div className="relative mx-auto h-[380px] w-full max-w-[360px] sm:h-[600px] sm:max-w-[440px] lg:mx-0 lg:h-[600px] lg:max-w-none">
          {/* Orange bracket — top left */}
          <div
            aria-hidden="true"
            className="absolute left-[9%] top-0 h-[17%] w-[30%] rounded-tl-[26px] border-l-[3px] border-t-[3px] border-[#f5a623]"
          />

          {/* Top image (skyline) */}
          <div className="absolute right-0 top-[2%] h-[76%] w-[85%] overflow-hidden rounded-[22px] shadow-[0_16px_38px_rgba(15,61,76,0.18)]">
            <Image
              src={about.images[0].src}
              alt={about.images[0].alt}
              fill
              sizes="(max-width: 1024px) 80vw, 380px"
              className="object-cover object-center"
            />
          </div>

          {/* Bottom image (traveler) */}
          <div className="absolute bottom-[1.5%] left-[2.5%] z-10 h-[68%] w-[84%] overflow-hidden rounded-[22px] border-[4px] border-white shadow-[0_20px_44px_rgba(15,61,76,0.25)]">
            <Image
              src={about.images[1].src}
              alt={about.images[1].alt}
              fill
              sizes="(max-width: 1024px) 80vw, 380px"
              className="object-cover object-center"
            />
          </div>

          {/* Orange bracket — bottom left */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 z-20 h-[16%] w-[34%] rounded-bl-[26px] border-b-[3px] border-l-[3px] border-[#f5a623]"
          />
        </div>

        {/* Right: content */}
        <div className="relative flex w-full flex-col items-start">
          {/* Dashed flight path + plane */}
          <svg
            aria-hidden="true"
            viewBox="0 0 150 70"
            className="pointer-events-none absolute -top-8 right-[4%] hidden h-[70px] w-[150px] text-[#0f3d4c] sm:block"
            fill="none"
          >
            <path
              d="M2 62C35 20 75 22 105 36 122 44 128 28 134 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M148 6c-1.200-1.200-3.400-.500-4.600.700L138 12l-11-3-2 2 8 5-3 3-4-1-1.500 1.500 4 2.500 2.500 4 1.500-1.500-1-4 3-3 5 8 2-2-2.500-11 4.800-4.800c1.200-1.200 1.900-3.400.700-4.600Z"
              fill="currentColor"
              transform="translate(-6 0)"
            />
          </svg>

          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="text-[15px] font-bold text-[#0f3d4c] sm:text-[17px]">
              {about.eyebrow}
            </span>
            <span className="h-[3px] w-[70px] rounded-full bg-[#f5a623]" />
          </div>

          <h2 className="mt-4 text-[clamp(30px,8vw,40px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0f3d4c] sm:text-[40px]">
            {about.title}
            <span className="block">
              <span className="text-[#f5a623]">{about.highlight}</span>{" "}
              {about.titleEnd}
            </span>
          </h2>

          <p className="mt-4 max-w-[720px] text-[14px] leading-[1.7] text-[#3f4a50] sm:text-[16px]">
            {about.description}
          </p>

          {/* Features */}
          <div className="mt-7 grid w-full gap-6 sm:grid-cols-2 sm:gap-8">
            {about.features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-4">
                <span className="grid h-[58px] w-[58px] shrink-0 place-items-center rounded-full bg-[#e2f5ee] text-[#1d6f6a]">
                  {featureIcons[feature.icon]}
                </span>
                <span className="h-12 w-px shrink-0 bg-[#d6dde0]" />
                <div>
                  <h3 className="text-[16px] font-bold text-[#0f3d4c] sm:text-[17px]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-[1.55] text-[#5a666c] sm:text-[14px]">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-10 grid w-full gap-4 sm:grid-cols-3 lg:mt-14">
            {about.stats.map((stat) => (
              <div
                key={stat.value}
                className="flex items-center gap-4 rounded-[14px] border border-[#e6eef0] bg-white px-4 py-4 shadow-[0_6px_18px_rgba(15,61,76,0.06)] sm:px-5"
              >
                <span className="grid h-[54px] w-[54px] shrink-0 place-items-center rounded-full bg-[#e2f5ee] text-[#1d6f6a]">
                  {statIcons[stat.icon]}
                </span>
                <div>
                  <p className="text-[26px] font-extrabold leading-none text-[#0f3d4c] sm:text-[30px]">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[12px] leading-[1.35] text-[#5a666c] sm:text-[13px]">
                    {stat.labelLines[0]}
                    <br />
                    {stat.labelLines[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

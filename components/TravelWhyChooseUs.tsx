"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { category } from "@/data";

const iconProps = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-9 w-9",
};

const PlaneIcon = (
  <svg {...iconProps} fill="currentColor" stroke="none">
    <path d="M36 4c-1.500-1.500-4.200-.600-5.800.900L24 11 8 7 5 10l11 7.500-5 5-6-1L3 23.500l6 3.500 3.500 6 1.500-2.500-1-6 5-5L26 36l3-3-4-16 6.100-6.100C32.600 9.200 37.500 5.500 36 4Z" />
  </svg>
);

const MedalIcon = (
  <svg {...iconProps}>
    <circle cx="20" cy="15" r="9.500" />
    <path d="m20 10.500 1.800 3.600 4 .6-2.900 2.800.7 4L20 19.600l-3.600 1.900.7-4-2.900-2.800 4-.6L20 10.500Z" fill="currentColor" stroke="none" />
    <path d="m13 23-4 12 6-2.500 3 5L20 28M27 23l4 12-6-2.500-3 5" />
  </svg>
);

const HeadsetIcon = (
  <svg {...iconProps}>
    <path d="M7 24v-4a13 13 0 0 1 26 0v4" />
    <rect x="4" y="22" width="7" height="11" rx="3" />
    <rect x="29" y="22" width="7" height="11" rx="3" />
    <path d="M33 33c0 3-3 4.500-8 4.500" />
    <circle cx="22" cy="37.500" r="1.500" fill="currentColor" />
  </svg>
);

const CalendarCheckIcon = (
  <svg {...iconProps}>
    <rect x="5" y="8" width="30" height="27" rx="4" />
    <path d="M5 16h30M13 4v7M27 4v7" />
    <path d="m14 26 4.500 4.500L27 21" />
  </svg>
);

type Feature = { icon: ReactNode; title: ReactNode };
const whyUs = category.whyUs;
const featureIcons: Record<string, ReactNode> = {
  plane: PlaneIcon,
  headset: HeadsetIcon,
  medal: MedalIcon,
  calendar: CalendarCheckIcon,
};
const leftFeatures: Feature[] = whyUs.features.left.map((feature) => ({
  icon: featureIcons[feature.icon],
  title: (
    <>
      {feature.titleLines[0]}
      <br />
      {feature.titleLines[1]}
    </>
  ),
}));
const rightFeatures: Feature[] = whyUs.features.right.map((feature) => ({
  icon: featureIcons[feature.icon],
  title: (
    <>
      {feature.titleLines[0]}
      <br />
      {feature.titleLines[1]}
    </>
  ),
}));

function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <div className="flex items-center gap-4">
      <span className="grid h-[56px] w-[56px] shrink-0 place-items-center rounded-[16px] border border-[#1f7a80] bg-gradient-to-br from-[#0f4a5a] to-[#0a3446] text-[#f5c518] shadow-[0_8px_18px_rgba(0,0,0,0.25)] sm:h-[70px] sm:w-[70px] sm:rounded-[20px]">
        {feature.icon}
      </span>
      <h3 className="text-[18px] font-bold leading-[1.3] text-white sm:text-[20px]">
        {feature.title}
      </h3>
    </div>
  );
}

const photoBase =
  "absolute overflow-hidden rounded-[22px] border-[5px] border-white shadow-[0_18px_40px_rgba(0,0,0,0.35)]";

export default function TravelWhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      data-reveal="right"
      className="relative isolate overflow-hidden bg-[#0a2a48] py-14 sm:py-16"
    >
      {/* Dotted world-map style texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(#6aa7d8 1.3px, transparent 1.6px)",
          backgroundSize: "13px 13px",
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 70% at 45% 40%, #000 20%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse 55% 70% at 45% 40%, #000 20%, transparent 75%)",
        }}
      />

      <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-5 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[3vw] lg:px-[4.5vw]">
        {/* Left: content */}
        <div className="flex w-full flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-8 rounded-full bg-[#f5c518]" />
            <span className="text-[18px] font-semibold text-[#f5c518] sm:text-[22px]">
              {whyUs.eyebrow}
            </span>
          </div>

          <h2 className="mt-5 text-[clamp(32px,3.9vw,58px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-white">
            {whyUs.title}
            <span className="block">
              <span className="text-[#f5c518]">{whyUs.highlight}</span>
            </span>
          </h2>

          <p className="mt-6 max-w-[640px] text-[15px] leading-[1.7] text-white/90 sm:text-[18px]">
            {whyUs.description}
          </p>

          {/* Features */}
          <div className="mt-9 grid w-full max-w-[640px] gap-7 sm:grid-cols-2 sm:gap-0">
            <div className="flex flex-col gap-7 sm:border-r sm:border-white/25 sm:pr-8">
              {leftFeatures.map((feature, i) => (
                <FeatureItem key={i} feature={feature} />
              ))}
            </div>
            <div className="flex flex-col gap-7 sm:pl-8">
              {rightFeatures.map((feature, i) => (
                <FeatureItem key={i} feature={feature} />
              ))}
            </div>
          </div>
        </div>

        {/* Right: overlapping photo collage */}
        <div className="relative mx-auto h-[320px] w-full max-w-[360px] sm:h-[500px] sm:max-w-[520px] lg:mx-0 lg:h-[480px] lg:max-w-none">
          {/* Bottom-right (mountains) */}
          <div className={`${photoBase} bottom-0 right-[2%] z-10 h-[48%] w-[61%]`}>
            <Image
              src={whyUs.images[0].src}
              alt={whyUs.images[0].alt}
              fill
              sizes="(max-width: 1024px) 60vw, 320px"
              className="object-cover object-center"
            />
          </div>

          {/* Left (beach) */}
          <div className={`${photoBase} left-0 top-[11%] z-20 h-[63%] w-[62%]`}>
            <Image
              src={whyUs.images[1].src}
              alt={whyUs.images[1].alt}
              fill
              sizes="(max-width: 1024px) 60vw, 330px"
              className="object-cover object-center"
            />
          </div>

          {/* Top-right (traveler) */}
          <div className={`${photoBase} right-0 top-0 z-30 h-[48%] w-[60%]`}>
            <Image
              src={whyUs.images[2].src}
              alt={whyUs.images[2].alt}
              fill
              sizes="(max-width: 1024px) 60vw, 320px"
              className="object-cover object-[center_30%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

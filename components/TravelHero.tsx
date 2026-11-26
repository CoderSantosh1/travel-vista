"use client";

import Image from "next/image";
import { category } from "@/data";
import { Plane } from "lucide-react";

const hero = category.hero;

export default function TravelHero() {
  return (
    <section
      id="home"
      data-reveal
      className="relative isolate flex min-h-[700px] items-center overflow-hidden bg-[#0b2a2a] lg:min-h-[calc(100svh-80px)]"
    >
      {/* Background image (mountain lake + cabin) */}
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      {/* Dark overlays for text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/45 via-transparent to-black/25" />

      <div className="hero-content mx-auto mt-24 w-full max-w-[1600px] px-6 py-16 sm:mt-40 sm:px-10 lg:px-[7vw] lg:py-20">
        <div className="max-w-[760px]">
          {/* Eyebrow */}
         <span className="inline-flex items-center gap-3 rounded-full border-2 border-[#35E5E5] bg-[#063B3D]/40 px-5 py-2.5 text-[14px] font-semibold tracking-tight text-white backdrop-blur-sm sm:text-[16px]">
          <Plane
            className="h-5 w-5 shrink-0"
            strokeWidth={3}
            fill="white"
          />
            {hero.eyebrow}

          
        </span>
          {/* Heading */}
          <h1 className="mt-6 text-[clamp(32px,9vw,54px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.4)] sm:text-[58px]">
            {hero.title}
            <span className="block text-[#f5c518]">{hero.highlight}</span>
            {hero.trailingTitle}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.7] text-white/90 sm:text-[19px]">
            {hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { category } from "@/data";

type Destination = (typeof category.destinations.items)[number];
const destinations = category.destinations.items;
const destinationsContent = category.destinations;

const GAP = 20; // px gap between cards

function usePerView() {
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perView;
}

function DestinationCard({ item }: { item: Destination }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[20px]">
      <Image
        src={item.image}
        alt={`${item.name} destination`}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 300px"
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      {/* Bottom navy gradient */}
      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-[#06284f] via-[#06284f]/80 to-transparent" />

      {/* Title */}
      <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
        <span className="h-[54px] w-[4px] shrink-0 rounded-full bg-[#f5b800]" />
        <div>
          <h3 className="text-[26px] font-bold leading-tight text-white sm:text-[30px]">
            {item.name}
          </h3>
          <p className="mt-0.5 text-[16px] text-white/90 sm:text-[18px]">
            {destinationsContent.tripLabel}
          </p>
        </div>
      </div>

      {/* Discount badge */}
      {item.discount && (
        <div className="absolute bottom-5 right-5">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="absolute -right-2 -top-3 h-6 w-6 text-[#f5b800]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 2v4M18.500 4.500l-2.500 3M22 11h-4" />
          </svg>
          <span className="grid h-[68px] w-[68px] place-items-center rounded-full bg-[#fbbf10] text-center text-[15px] font-extrabold leading-[1.1] text-[#0a2f5c] shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
            {item.discount.split(" ").map((part, i) => (
              <span key={i} className="block">
                {part}
              </span>
            ))}
          </span>
        </div>
      )}
    </article>
  );
}

export default function TravelDestinations() {
  const perView = usePerView();
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, destinations.length - perView);
  const current = Math.min(index, maxIndex);

  const prev = () => setIndex(current <= 0 ? maxIndex : current - 1);
  const next = () => setIndex(current >= maxIndex ? 0 : current + 1);

  return (
    <section
      id="destinations"
      data-reveal="left"
      className="relative isolate overflow-hidden bg-white py-14 sm:py-16"
    >
      <div className="mx-auto grid max-w-[1500px] items-stretch gap-10 px-5 sm:px-10 lg:grid-cols-[0.36fr_1fr] lg:gap-[2.4vw] lg:px-[3vw]">
        {/* Left: heading + controls */}
        <div className="contents lg:flex lg:flex-col lg:items-start lg:justify-between lg:gap-10">
          <div className="order-1 lg:order-none">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#dfeefa] px-4 py-2 text-[13px] font-bold tracking-[0.3px] text-[#0a2f5c] sm:text-[14px]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 22s7-6.200 7-12a7 7 0 1 0-14 0c0 5.800 7 12 7 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
              {destinationsContent.eyebrow}
            </span>

            <h2 className="mt-8 text-[clamp(36px,10vw,50px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0a2f5c] sm:text-[50px]">
              {destinationsContent.title}
              <span className="block font-serif font-medium italic tracking-[-0.01em]">
                {destinationsContent.highlight}
              </span>
            </h2>
          </div>

          {/* Arrows */}
          <div className="order-3 flex items-center justify-center gap-4 lg:order-none lg:justify-start">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous destinations"
              className="grid h-[56px] w-[56px] place-items-center rounded-full border border-[#b7cfe6] bg-white text-[#0a2f5c] shadow-sm transition hover:bg-[#0a2f5c] hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M20 12H4M10 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2.200"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next destinations"
              className="grid h-[56px] w-[56px] place-items-center rounded-full bg-[#f2f4f7] hover:bg-[#0a2f5c] text-[#18191a] hover:text-white shadow-[0_8px_18px_rgba(10,47,92,0.35)] transition hover:brightness-125"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M4 12h16M14 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.200"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right: cards slider */}
        <div className="order-2 min-w-0 overflow-hidden bg-white lg:order-none">
          <div
            className="flex h-[340px] transition-transform duration-500 ease-out sm:h-[480px]"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(calc(-1 * ${current} * (100% + ${GAP}px) / ${perView}))`,
            }}
          >
            {destinations.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="h-full shrink-0"
                style={{
                  width: `calc((100% - ${GAP * (perView - 1)}px) / ${perView})`,
                }}
              >
                <DestinationCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

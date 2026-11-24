"use client";

import { category } from "@/data";

type Props = {
  title?: string;
  items?: string[];
};

export default function TopCityActivities({
  title = category.activities.title,
  items = category.activities.items,
}: Props) {
  return (
    <section data-reveal="scale" className="bg-white px-4 py-10 sm:px-8 sm:py-14">
      <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[24px] bg-[#161f42] px-5 py-8 sm:px-10 sm:py-10">
        {/* Faint topographic lines */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full text-white opacity-[0.05]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M-20 90C150 40 260 140 420 100S700 30 860 90s250 50 380-20" />
          <path d="M-20 140C140 90 270 190 430 150S710 80 870 140s250 50 380-20" />
          <path d="M-20 300C160 250 280 350 440 310S720 240 880 300s250 50 380-20" />
          <path d="M-20 350C170 300 290 400 450 360S730 290 890 350s250 50 380-20" />
          <path d="M300 -10C340 80 260 160 330 260S420 380 380 420" />
          <path d="M900 -10C940 90 860 170 930 270S1020 390 980 420" />
        </svg>

        <h2 className="relative text-center text-[28px] font-medium text-[#d9a24a] sm:text-[36px]">
          {title}
        </h2>

        <ul className="relative mx-auto mt-6 flex flex-wrap justify-center gap-x-2.5 gap-y-2.5 sm:mt-7">
          {items.map((item) => (
            <li key={item}>
              <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[14px] text-[#1a1a1a] transition-colors hover:bg-[#d9a24a] hover:text-[#161f42] sm:text-[16px]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

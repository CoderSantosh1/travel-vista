"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { category } from "@/data";

const testimonials = category.testimonials.items;
const testimonialsContent = category.testimonials;
const floaters = testimonialsContent.floaters;

export default function TravelTestimonials() {
  const [index, setIndex] = useState(0);
  const [showTop, setShowTop] = useState(false);

  const total = testimonials.length;
  const item = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), 7000);
    return () => clearInterval(timer);
  }, [total, index]);

  // Show the scroll-to-top button after scrolling
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="testimonials"
      data-reveal="scale"
      className="relative isolate overflow-hidden bg-white py-12 sm:py-14 lg:min-h-[560px]"
    >
      {/* Floating avatars */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        {floaters.map((f) => (
          <span
            key={`${f.src}-${f.className}`}
            className={`absolute overflow-hidden rounded-[14px] border-[3px] border-white shadow-[0_8px_20px_rgba(15,61,76,0.18)] ${f.className}`}
          >
            <Image
              src={f.src}
              alt=""
              fill
              sizes="90px"
              className="object-cover object-center"
            />
          </span>
        ))}
      </div>

      {/* Decorative dots (bottom-left of the card) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[26px] left-[24%] hidden h-[56px] w-[130px] lg:block"
        style={{
          backgroundImage: "radial-gradient(#12b5ad 1.5px, transparent 1.8px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Decorative arc + dot (bottom-right) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[34px] right-[11%] hidden items-center gap-2 lg:flex"
      >
        <span className="h-[26px] w-[14px] rounded-l-full border-2 border-r-0 border-[#12b5ad]" />
        <span className="h-[18px] w-[18px] rounded-full bg-[#fbbf10]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-10">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <span className="hidden h-px w-[76px] bg-[#0f3d4c] sm:block" />
            <span className="inline-flex items-center gap-3 rounded-full bg-[#fbbf10] px-6 py-2.5 text-[15px] font-bold tracking-[1px] text-[#0f3d4c] sm:text-[18px]">
              <span
                aria-hidden="true"
                className="font-serif text-[34px] font-black leading-none"
                style={{ transform: "translateY(7px)" }}
              >
                &ldquo;
              </span>
              {testimonialsContent.eyebrow}
            </span>
            <span className="hidden h-px w-[76px] bg-[#0f3d4c] sm:block" />
          </div>

          <h2 className="mt-4 text-[clamp(30px,3.9vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0f3d4c]">
            {testimonialsContent.title} <span className="text-[#12b5ad]">{testimonialsContent.highlight}</span> {testimonialsContent.titleEnd}
          </h2>

          <p className="mt-3 max-w-[800px] text-[14px] leading-[1.6] text-[#1c2a33] sm:text-[18px]">
            {testimonialsContent.description}
          </p>
        </div>

        {/* Card */}
        <div className="relative mx-auto mt-10 max-w-[770px]">
          <article
            key={index}
            className="relative rounded-[28px] bg-white px-5 py-6 shadow-[5px_6px_0_0_#12b5ad,0_24px_48px_rgba(18,181,173,0.14)] sm:px-8 sm:py-7"
          >
            {/* Big faint quote mark */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-8 top-2 hidden font-serif text-[150px] font-black leading-none text-[#12b5ad]/25 sm:block"
            >
              &ldquo;
            </span>

            <div className="flex flex-col gap-5 sm:flex-row sm:gap-8">
              {/* Avatar */}
              <span className="relative h-[94px] w-[94px] shrink-0 overflow-hidden rounded-[14px] border-[3px] border-[#12b5ad] shadow-sm">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  sizes="94px"
                  className="object-cover object-center"
                />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-[22px] font-extrabold text-[#0f3d4c] sm:text-[24px]">
                  {item.name}
                </h3>

                <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[15px] text-[#4a5961] sm:text-[17px]">
                  <span>{item.role}</span>
                  <span className="flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
                      <path d="M12 22s7-6.200 7-12a7 7 0 1 0-14 0c0 5.800 7 12 7 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                    {item.country}
                  </span>
                </p>

                <span className="mt-3 block h-[3px] w-[64px] rounded-full bg-[#fbbf10]" />

                <p className="mt-4 text-[15px] leading-[1.7] text-[#16242c] sm:text-[17px]">
                  {item.quote}
                </p>

                <div className="mt-5 flex items-center justify-between gap-4">
                  {/* Stars */}
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 24 24"
                        className="h-6 w-6 text-[#fbbf10]"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 2l2.900 6.300 6.900.8-5.100 4.700 1.400 6.800L12 17.100 5.900 20.600l1.400-6.800L2.200 9.100l6.900-.8L12 2Z" />
                      </svg>
                    ))}
                  </div>

                  {/* Arrows */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="grid h-[42px] w-[42px] place-items-center rounded-full border border-[#0f3d4c] bg-white text-[#0f3d4c] transition hover:bg-[#0f3d4c] hover:text-white"
                    >
                      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none">
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
                      aria-label="Next testimonial"
                      className="grid h-[42px] w-[42px] place-items-center rounded-full bg-[#ebf4f7] hover:bg-[#0f3d4c] text-[#101111] hover:text-[#ebf4f7] transition hover:brightness-125"
                    >
                      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none">
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
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Scroll-to-top button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-40 grid h-[52px] w-[52px] place-items-center rounded-full bg-[#fbbf10] text-[#0f3d4c] shadow-[0_10px_22px_rgba(251,191,16,0.45)] transition-all duration-300 hover:brightness-105 sm:right-10 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M12 20V4M6 10l6-6 6 6"
            stroke="currentColor"
            strokeWidth="2.600"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}

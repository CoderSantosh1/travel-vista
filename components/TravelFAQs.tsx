"use client";

import Image from "next/image";
import { useState } from "react";
import { category } from "@/data";

const faqs = category.faqs.items;
const faqsContent = category.faqs;

export default function TravelFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      data-reveal="left"
      className="relative isolate overflow-hidden bg-white py-12 sm:py-14"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-[3.5vw] lg:px-[5vw]">
        {/* Left: images */}
        <div className="relative mx-auto h-[320px] w-full max-w-[360px] sm:h-[540px] sm:max-w-[460px] lg:mx-0 lg:h-[570px] lg:max-w-none">
          {/* Main image */}
          <div className="absolute left-0 top-0 h-[94%] w-[92%] overflow-hidden rounded-[28px] shadow-[0_16px_38px_rgba(15,61,76,0.15)]">
            <Image
              src={faqsContent.images[0].src}
              alt={faqsContent.images[0].alt}
              fill
              sizes="(max-width: 1024px) 90vw, 430px"
              className="object-cover object-center"
            />
          </div>

          {/* Circle image */}
          <div className="absolute bottom-0 right-0 z-10 aspect-square w-[48%] max-w-[230px] rounded-full bg-white p-[5px] shadow-[0_14px_30px_rgba(15,61,76,0.25)] ring-1 ring-[#0a9db9]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src={faqsContent.images[1].src}
                alt={faqsContent.images[1].alt}
                fill
                sizes="230px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="flex w-full flex-col items-start">
          <div className="flex items-center gap-2">
            <span className="h-[22px] w-[3px] rounded-full bg-[#0ea5e0]" />
            <span className="text-[20px] font-bold text-[#0ea5e0] sm:text-[24px]">
              {faqsContent.eyebrow}
            </span>
          </div>

          <h2 className="mt-1 text-[clamp(30px,3.7vw,54px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0b1f33]">
            {faqsContent.title}
          </h2>

          <p className="mt-3 max-w-[640px] text-[15px] leading-[1.7] text-[#2c3e50] sm:text-[18px]">
            {faqsContent.description}
          </p>

          {/* Accordion */}
          <div className="mt-6 flex w-full flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `travel-faq-panel-${index}`;
              const buttonId = `travel-faq-button-${index}`;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-[18px] transition-colors ${
                    isOpen
                      ? "bg-gradient-to-b from-[#e6f4f8] to-[#f1f9fb]"
                      : "border border-[#dfe5e8] bg-white shadow-[0_2px_6px_rgba(15,61,76,0.05)]"
                  }`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-[17px] ${
                      isOpen
                        ? "rounded-[18px] bg-gradient-to-r from-[#0a9db9] to-[#0aa8c4] text-white"
                        : "text-[#0b1f33]"
                    }`}
                  >
                    <span className="text-[16px] font-semibold sm:text-[19px]">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full ${
                        isOpen
                          ? "bg-white text-[#0a9db9]"
                          : "bg-[#cdeff7] text-[#0a9db9]"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                        <path
                          d="M5 12h14"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 5v14"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          className={`origin-center transition-transform duration-300 ${
                            isOpen ? "scale-y-0" : "scale-y-100"
                          }`}
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pt-4 text-[14px] leading-[1.7] text-[#1c2a33] sm:px-7 sm:text-[17px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

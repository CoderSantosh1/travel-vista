"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { category } from "@/data";

type Photo = (typeof category.gallery.items)[number];
const photos = category.gallery.items;
const galleryContent = category.gallery;

export default function TravelGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isOpen = selectedIndex !== null;
  const selectedPhoto =
    selectedIndex === null ? null : photos[selectedIndex];

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      } else if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % photos.length,
        );
      } else if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current - 1 + photos.length) % photos.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const movePhoto = (direction: -1 | 1) => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current + direction + photos.length) % photos.length,
    );
  };

  return (
    <>
      <section
        id="gallery"
        data-reveal
        className="relative isolate overflow-hidden bg-white py-12 sm:py-14"
      >
        <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-[1.8vw]">
          {/* Heading */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4">
              <span className="hidden h-px w-[60px] bg-[#0f3d4c] sm:block" />
              <span className="inline-flex items-center gap-3 rounded-full bg-[#fbbf10] px-6 py-2.5 text-[15px] font-bold tracking-[1px] text-[#0f3d4c] sm:text-[18px]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2.500" />
                  <circle
                    cx="9"
                    cy="10"
                    r="1.800"
                    fill="currentColor"
                    stroke="none"
                  />
                  <path d="m21 16-5.500-5.500L6 20" />
                </svg>
                {galleryContent.eyebrow}
              </span>
              <span className="hidden h-px w-[60px] bg-[#0f3d4c] sm:block" />
            </div>

            <h2 className="mt-4 text-[clamp(30px,3.9vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0f3d4c]">
              {galleryContent.title}{" "}
              <span className="text-[#12b5ad]">{galleryContent.highlight}</span>
            </h2>

            <p className="mt-3 max-w-[800px] text-[14px] leading-[1.6] text-[#1c2a33] sm:text-[18px]">
              {galleryContent.description}
            </p>
          </div>

          {/* Grid */}
          <div className="mt-8 grid auto-rows-[130px] grid-cols-2 gap-2 sm:auto-rows-[190px] sm:gap-3 lg:auto-rows-[clamp(150px,13.2vw,185px)] lg:grid-cols-[1.18fr_1fr_1fr_1fr]">
            {photos.map((photo, index) => (
              <figure
                key={photo.src}
                className={`group relative overflow-hidden rounded-[18px] sm:rounded-[22px] ${photo.className}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 350px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <button
                  type="button"
                  aria-label={`View photo: ${photo.alt}`}
                  onClick={() => setSelectedIndex(index)}
                  className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
                >
                  <span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-black/55 text-white transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="10.8"
                        cy="10.8"
                        r="6.3"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="m16 16 4.5 4.5M10.8 7.8v6m-3-3h6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
              </figure>
            ))}
          </div>
        </div>
      </section>
      {selectedPhoto &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Travel gallery image viewer"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-8"
          >
            <button
              type="button"
              aria-label="Close image viewer"
              onClick={() => setSelectedIndex(null)}
              className="absolute inset-0 cursor-default"
            />
            <button
              type="button"
              aria-label="Close image viewer"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-3 top-3 z-20 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => movePhoto(-1)}
              className="absolute left-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:left-6 sm:h-12 sm:w-12"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M15 18 9 12l6-6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="relative z-10 h-[72svh] w-full max-w-[1200px]">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
              
            </div>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => movePhoto(1)}
              className="absolute right-2 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:right-6 sm:h-12 sm:w-12"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m9 18 6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>,
          document.body,
        )}
    </>
  );
}

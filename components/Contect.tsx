
"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Plane,
} from "lucide-react";
import { category } from "@/data";

const contact = category.contact;

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Connect your API here.
  };

  const inputClass =
    "w-full min-w-0 rounded-lg border border-[#d3dce4] bg-[#f1f4f7] px-3 py-2.5 text-[13px] text-[#173b4a] outline-none transition placeholder:text-[#8997a3] focus:border-[#00aeb5] focus:bg-white focus:ring-2 focus:ring-[#00aeb5]/10";

  const labelClass =
    "mb-1.5 block text-[13px] font-bold text-[#173b4a]";

  return (
    <section
      id="contact"
      data-reveal
      className="bg-white px-3 py-10 sm:px-5 lg:px-8 lg:py-16"
    >
      <div className="relative mx-auto max-w-[1350px] overflow-hidden rounded-2xl shadow-xl">

        {/* Background Image */}
        <Image
          src={contact.background}
          alt="Traveler enjoying a beautiful mountain sunset"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1350px"
          className="object-cover object-center"
        />

        {/* Neutral Overlay - No Blue Color */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />

        <div className="relative z-10 grid items-center gap-8 p-4 sm:p-7 lg:min-h-[650px] lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:p-10">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center text-white">

            <span className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[1.5px]">
              <span className="h-4 w-[3px] rounded-full bg-[#ffb900]" />
              {contact.eyebrow}
            </span>

            <h2 className="max-w-[390px] text-3xl font-extrabold leading-[1.12] sm:text-4xl">
              {contact.title}
              <br />
              <span className="text-[#ffb900]">{contact.highlight}</span>
            </h2>

            <div className="mt-2 h-1 w-20 rounded-full bg-[#ffb900]" />

            <p className="mt-4 max-w-[390px] text-sm leading-6 text-white">
              {contact.description}
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/50 bg-[#00b6bd]">
                  <MapPin size={23} />
                </div>
                <div>
                  <h3 className="text-base font-bold">{contact.addressLabel}</h3>
                  <p className="mt-1 text-sm leading-5 text-white">
                    {contact.address[0]}
                    <br />
                    {contact.address[1]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/50 bg-[#00b6bd]">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold">{contact.phoneLabel}</h3>
                  <a
                    href={contact.phoneHref}
                    className="mt-1 block text-sm text-white transition hover:text-[#ffb900]"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/50 bg-[#00b6bd]">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold">{contact.emailLabel}</h3>
                  <a
                    href={contact.emailHref}
                    className="mt-1 block text-sm text-white transition hover:text-[#ffb900]"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-2xl bg-white p-4 shadow-2xl sm:p-7 lg:p-8">

            {/* FORM HEADING */}
            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2 text-sm font-bold text-[#073d50]">
                <Plane size={20} className="text-[#ffb900]" />
                {contact.formEyebrow}
              </div>

              <h2 className="text-2xl font-extrabold leading-tight text-[#073b4a] sm:text-[32px]">
                {contact.formTitle}{" "}
                <span className="text-[#00aeb5]">
                  {contact.formHighlight}
                </span>
              </h2>

              <div className="mt-3 h-1.5 w-20 rounded-full bg-[#ffb900]" />

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {contact.formDescription}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>
                    {contact.form.firstNameLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder={contact.form.firstNamePlaceholder}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    {contact.form.lastNameLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder={contact.form.lastNamePlaceholder}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* PHONE AND EMAIL */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>
                    {contact.form.phoneLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={contact.form.phonePlaceholder}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    {contact.form.emailLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={contact.form.emailPlaceholder}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* TRAVEL DETAILS */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className={labelClass}>
                    {contact.form.destinationLabel} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="destination"
                    defaultValue=""
                    required
                    className={inputClass}
                  >
                    <option value="" disabled>{contact.form.destinationPlaceholder}</option>
                    {contact.destinations.map((destination) => (
                      <option key={destination} value={destination}>{destination}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>
                    {contact.form.dateLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    {contact.form.travelersLabel} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="travelers"
                    defaultValue="2"
                    className={inputClass}
                  >
                    {contact.form.travelers.map((traveler) => (
                      <option key={traveler.value} value={traveler.value}>{traveler.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className={labelClass}>
                  {contact.form.messageLabel} <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder={contact.form.messagePlaceholder}
                  className={`${inputClass} min-h-[90px] resize-y`}
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffb900] px-10 py-3.5 text-sm font-extrabold text-[#073b4a] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5a900] hover:shadow-lg"
                >
                  {contact.submitLabel}
                  <Send size={16} fill="currentColor" />
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

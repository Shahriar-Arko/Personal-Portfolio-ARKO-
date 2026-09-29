"use client";

import { useState } from "react";

const contactLinks = [
  {
    title: "GitHub",
    subtitle: "View my projects",
    value: "github.com/Shahriar-Arko",
    href: "https://github.com/Shahriar-Arko",
    icon: "GH",
  },
  {
    title: "LinkedIn",
    subtitle: "Connect with me",
    value: "linkedin.com/in/shahriar-arko",
    href: "https://www.linkedin.com/in/shahriar-arko/",
    icon: "in",
  },
];


export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "shahriarrrz@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };


  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 pb-24 pt-20 sm:pt-24"
    >

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#8ecbff]/5 blur-[140px]" />


      <div className="mx-auto max-w-6xl">

        {/* Main contact panel */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#10161c]">

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#8ecbff]/10 blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-[#8ecbff]/5 blur-[120px]" />


          {/* Content */}
          <div className="relative px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">

            {/* Section label */}
            <div className="mb-6 flex items-center gap-3 font-mono text-xs tracking-widest">

              <span className="text-[#8ecbff]">
                04
              </span>

              <span className="text-gray-700">
                /
              </span>

              <span className="text-gray-500">
                CONTACT
              </span>

            </div>


            {/* Heading */}
            <div className="max-w-3xl">

              <h2 className="text-5xl font-black leading-[1] tracking-[-0.04em] sm:text-6xl lg:text-7xl">

                Let's build

                <br />

                <span className="text-[#8ecbff]">
                  something.
                </span>

              </h2>


              <p className="mt-7 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
                Have a project, collaboration, or simply want to
                talk about technology? Feel free to reach out.
              </p>

            </div>


            {/* Contact cards */}
            <div className="mt-12 grid gap-4 md:grid-cols-3">

              {/* GitHub + LinkedIn */}
              {contactLinks.map((contact) => (

                <a
                  key={contact.title}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1015] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#8ecbff]/40 hover:bg-[#111a22] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
                >

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#8ecbff]/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />


                  <div className="relative">

                    {/* Icon */}
                    <div className="flex items-center justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-sm font-bold text-[#8ecbff] transition duration-300 group-hover:border-[#8ecbff]/30 group-hover:bg-[#8ecbff]/10">
                        {contact.icon}
                      </div>

                      <span className="text-lg text-gray-700 transition duration-300 group-hover:translate-x-1 group-hover:text-[#8ecbff]">
                        ↗
                      </span>

                    </div>


                    {/* Text */}
                    <div className="mt-6">

                      <h3 className="text-lg font-bold text-white">
                        {contact.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {contact.subtitle}
                      </p>

                      <p className="mt-4 truncate font-mono text-xs text-gray-600 transition group-hover:text-[#8ecbff]">
                        {contact.value}
                      </p>

                    </div>

                  </div>

                </a>

              ))}


              {/* EMAIL */}
              <button
                type="button"
                onClick={copyEmail}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1015] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#8ecbff]/40 hover:bg-[#111a22] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
              >

                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#8ecbff]/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />


                <div className="relative">

                  {/* Icon */}
                  <div className="flex items-center justify-between">

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border font-mono text-sm font-bold transition duration-300 ${
                        copied
                          ? "border-green-400/30 bg-green-400/10 text-green-400"
                          : "border-white/10 bg-white/[0.04] text-[#8ecbff] group-hover:border-[#8ecbff]/30 group-hover:bg-[#8ecbff]/10"
                      }`}
                    >
                      {copied ? "✓" : "@"}
                    </div>


                    <span
                      className={`text-lg transition duration-300 ${
                        copied
                          ? "text-green-400"
                          : "text-gray-700 group-hover:translate-x-1 group-hover:text-[#8ecbff]"
                      }`}
                    >
                      {copied ? "✓" : "↗"}
                    </span>

                  </div>


                  {/* Text */}
                  <div className="mt-6">

                    <h3 className="text-lg font-bold text-white">
                      Email
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {copied ? "Email copied!" : "Copy my email"}
                    </p>

                    <p
                      className={`mt-4 truncate font-mono text-xs transition ${
                        copied
                          ? "text-green-400"
                          : "text-gray-600 group-hover:text-[#8ecbff]"
                      }`}
                    >
                      {email}
                    </p>

                  </div>

                </div>

              </button>

            </div>


            {/* Bottom status */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7">

              <div className="flex items-center gap-3">

                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />

                <span className="font-mono text-xs text-gray-600">
                  available for opportunities
                </span>

              </div>


              <span className="font-mono text-xs text-gray-700">
                let's connect →
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
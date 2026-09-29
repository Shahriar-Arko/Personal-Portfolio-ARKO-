"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const navItems = [
  {
    name: "About",
    href: "/about",
    
  },
  {
    name: "Technologies",
    href: "/technologies",
    
  },
  {
    name: "Projects",
    href: "/projects",
    
  },
  {
    name: "Contact",
    href: "/contact",
    
  },
];


export default function Navbar() {

  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2">

      {/* Outer glow */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-[22px] bg-gradient-to-r from-transparent via-[#8ecbff]/20 to-transparent opacity-70 blur-sm" />


      {/* Navbar */}
      <div className="relative rounded-[20px] border border-white/10 bg-[#10161c]/90 px-4 py-3 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-5">

        {/* Top subtle highlight */}
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#8ecbff]/40 to-transparent" />


        <div className="flex items-center justify-between">


          {/* ================================================= */}
          {/* LOGO */}
          {/* ================================================= */}

          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >




            {/* Name */}
            <div className="hidden sm:block">

              <div className="text-[15px] font-bold tracking-tight text-white">
                Sadat Shahriar Arko
              </div>

              <div className="mt-0.5 flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-gray-600">

                <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_7px_rgba(74,222,128,0.7)]" />

                Available

              </div>

            </div>

          </Link>


          {/* ================================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ================================================= */}

          <div className="hidden items-center gap-1 md:flex">

            {navItems.map((item) => {

              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);


              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-[#8ecbff]/10 text-[#8ecbff]"
                      : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >

                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[#8ecbff] shadow-[0_0_8px_rgba(142,203,255,0.8)]" />
                  )}


                  {/* Number */}
                  <span
                    className={`font-mono text-[9px] transition duration-300 ${
                      isActive
                        ? "text-[#8ecbff]"
                        : "text-gray-700 group-hover:text-gray-500"
                    }`}
                  >
                    {item.number}
                  </span>


                  <span>
                    {item.name}
                  </span>

                </Link>
              );

            })}

          </div>


          {/* ================================================= */}
          {/* DESKTOP RESUME */}
          {/* ================================================= */}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-xl border border-[#8ecbff]/30 bg-[#8ecbff] px-5 py-2.5 text-sm font-bold text-[#071017] shadow-[0_0_20px_rgba(142,203,255,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8ecbff] hover:shadow-[0_0_30px_rgba(142,203,255,0.25)] md:flex"
          >

            {/* Shine */}
            <span className="absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />

            <span className="relative">
              Resume
            </span>

            <span className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              ↗
            </span>

          </a>


          {/* ================================================= */}
          {/* MOBILE BUTTON */}
          {/* ================================================= */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 md:hidden ${
              menuOpen
                ? "border-[#8ecbff]/40 bg-[#8ecbff]/10 text-[#8ecbff]"
                : "border-white/10 bg-white/[0.04] text-gray-300 hover:border-[#8ecbff]/30 hover:text-white"
            }`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >

            {menuOpen ? (
              <span className="text-lg">
                ×
              </span>
            ) : (
              <div className="space-y-1.5">

                <span className="block h-px w-4 bg-current" />

                <span className="block h-px w-3 bg-current" />

              </div>
            )}

          </button>

        </div>


        {/* ================================================= */}
        {/* MOBILE MENU */}
        {/* ================================================= */}

        {menuOpen && (

          <div className="mt-4 border-t border-white/10 pt-4 md:hidden">

            <div className="mb-3 flex items-center justify-between px-2">

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                Navigation
              </span>

              <span className="flex items-center gap-1.5 font-mono text-[9px] text-green-400">

                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                ONLINE

              </span>

            </div>


            <div className="flex flex-col gap-1">

              {navItems.map((item) => {

                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);


                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 transition-all duration-300 ${
                      isActive
                        ? "border border-[#8ecbff]/20 bg-[#8ecbff]/10 text-[#8ecbff]"
                        : "border border-transparent text-gray-400 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >

                    <div className="flex items-center gap-3">

                      <span className="font-mono text-[9px] text-gray-600">
                        {item.number}
                      </span>

                      <span className="text-sm font-medium">
                        {item.name}
                      </span>

                    </div>


                    <span className="text-xs">
                      {isActive ? "●" : "↗"}
                    </span>

                  </Link>
                );

              })}


              {/* Mobile Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#8ecbff] px-4 py-3.5 text-sm font-bold text-[#071017] transition hover:bg-[#a8dcff]"
              >

                Resume

                <span>
                  ↗
                </span>

              </a>

            </div>

          </div>

        )}

      </div>

    </nav>
  );
}
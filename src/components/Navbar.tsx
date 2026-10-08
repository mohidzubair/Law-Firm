"use me";
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Scale, Phone, Menu, X, ChevronRight, Shield, Award, Clock } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Adv. Zubair", href: "/about" },
    { name: "Legal Services", href: "/services" },
    { name: "Overseas Pakistanis", href: "/overseas-pakistanis" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Top Emergency Strip */}
      <div className="bg-slate-900 text-slate-200 py-2 text-xs sm:text-sm px-4 hidden md:block border-b border-slate-800 font-sans">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-amber-400 font-semibold">
              <Shield className="w-4 h-4 text-amber-400" /> Over 25 Years Courtroom Mastery in Lahore
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> Open 24/7 for Urgent Legal Matters
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="tel:+923194959420" 
              className="flex items-center gap-2 text-slate-200 hover:text-amber-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" /> +92 319 4959420
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href="tel:+923004714001" 
              className="flex items-center gap-2 text-slate-200 hover:text-amber-400 transition-colors font-medium"
            >
              Adv. Zubair: +92 300 4714001
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 bg-white border-b border-slate-200 ${
          isScrolled ? "shadow-md py-3" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#ca8a04] flex items-center justify-center text-white shadow-sm group-hover:bg-[#a16207] transition-colors">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="block font-sans text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                ZUBAIR LAW FIRM
              </span>
              <span className="block text-[11px] text-[#ca8a04] font-semibold tracking-wide">
                Founder: Adv. Zubair Mahmood (High Court)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-md text-sm font-semibold text-slate-700 hover:text-[#ca8a04] hover:bg-amber-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/+923194959420?text=Hello%20Zubair%20Law%20Firm,%20I%20would%20like%20to%20book%20a%20legal%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-md bg-[#ca8a04] hover:bg-[#a16207] text-white font-bold text-sm transition-colors flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 fill-white text-white" />
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:bg-amber-50 hover:text-[#ca8a04] transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-2">
              <a
                href="tel:+923194959420"
                className="w-full py-3 px-4 rounded-md bg-amber-50 text-slate-900 border border-amber-200 flex items-center justify-center gap-2 font-medium"
              >
                <Phone className="w-4 h-4 text-[#ca8a04]" /> Call Office: +92 319 4959420
              </a>
              <a
                href="https://wa.me/+923194959420?text=Hello%20Zubair%20Law%20Firm,%20I%20would%20like%20to%20book%20a%20legal%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-md bg-[#ca8a04] text-white flex items-center justify-center gap-2 font-bold text-center shadow-sm hover:bg-[#a16207] transition-colors"
              >
                WhatsApp Consultation
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

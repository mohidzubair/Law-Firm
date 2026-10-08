import React from "react";
import Link from "next/link";
import { Scale, Phone, Mail, MapPin, Clock, Award, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-8 pb-6 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-8 border-b border-slate-800">

          {/* Col 1: Firm Info & Credentials */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-sm shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="font-sans text-lg font-bold text-white block tracking-tight">
                  ZUBAIR LAW FIRM
                </span>
                <span className="text-xs text-amber-400 font-semibold">
                  Founder: Adv. Zubair Mahmood
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Zubair Law Firm is a premier full-service law firm in Lahore founded by Senior Advocate High Court Zubair Mahmood (LLB, BA). Delivering robust courtroom advocacy, transparent fees, and personal client counsel across Pakistan.
            </p>

            <div className="pt-1 flex flex-wrap gap-2 text-xs">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Punjab Bar Council Enrolled</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Lahore High Court Bar Association Member</span>
              </div>
            </div>
          </div>


          {/* Col 2: Office Locations & Contact Info */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-sans text-white font-bold text-base tracking-tight">
              Office Locations & Contact
            </h3>

            {/* Office Locations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
              <div className="p-3.5 rounded-lg bg-slate-800/40 border border-slate-800/80 hover:border-slate-700 transition-all space-y-1.5">
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" /> Main Office (Saleemi Chambers)
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Room # 3-9 Basement, Saleemi Chambers, 15-Edward Road, Lahore.
                </p>
                <p className="text-slate-400 text-xs font-mono pt-0.5">
                  Ph: 042-37230133 / 042-37039933
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-800/40 border border-slate-800/80 hover:border-slate-700 transition-all space-y-1.5">
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" /> DHA Branch
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Y Block Main Market, Sector Y, DHA Phase 3, Lahore.
                </p>
              </div>
            </div>

            {/* Contact Details Bar */}
            <div className="pt-3 flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-xs sm:text-sm font-sans border-t border-slate-800/60">
              <a
                href="tel:+923194959420"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+92 319 4959420 / +92 300 4714001</span>
              </a>

              <a
                href="mailto:zubair_ramday@hotmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>zubair_ramday@hotmail.com</span>
              </a>

              <div className="flex items-center gap-2 text-amber-400 font-medium text-xs">
                <Clock className="w-4 h-4 shrink-0" />
                <span>24 Hours Emergency Legal Help</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 font-sans">
          <p>
            © {new Date().getFullYear()} Zubair Law Firm. All Rights Reserved. Founder & Senior Advocate: Zubair Mahmood (High Court).
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">Terms of Consultation</Link>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">Location Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


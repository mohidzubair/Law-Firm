import React from "react";
import ContactSection from "@/components/ContactSection";
import { Clock } from "lucide-react";

export const metadata = {
  title: "Contact Zubair Law Firm | Lawyers in Lahore | Office Address & Map",
  description:
    "Call or WhatsApp +92 319 4959420 or +92 300 4714001 to reach Zubair Law Firm. Main Office at Saleemi Chambers (15-Edward Road) & DHA Phase 3 Branch Lahore. Free legal consultation.",
};

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">

      {/* Header Banner */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-slate-700" /> 24 Hours Emergency Legal Assistance
          </span>

          <h1 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Contact <span className="text-slate-900">Zubair Law Firm</span>
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Reach Founder & Senior Advocate High Court Zubair Mahmood and our legal team directly. We have two office locations in Lahore to serve you.
          </p>
        </div>
      </section>

      {/* Embedded Google Map Frame */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm h-[400px] bg-slate-100 relative">
            <iframe
              title="Zubair Law Firm Lahore Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13608.204554286127!2d74.3725!3d31.4725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919050303b6efcf%3A0x6a2c2b3e8e19e9!2sSector%20Y%20DHA%20Phase%203%2C%20Lahore!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Main Consultation Form & Office Info */}
      <ContactSection />

    </div>
  );
}

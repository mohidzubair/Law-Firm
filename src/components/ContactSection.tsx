"use me";
"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building2
} from "lucide-react";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

export default function ContactSection({
  title = "Schedule a Legal Consultation",
  subtitle = "Reach Founder & Senior Advocate High Court Zubair Mahmood by phone, WhatsApp, or message below. We offer a confidential initial consultation and transparent legal advice."
}: ContactSectionProps = {}) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "Family Law & Khula",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-16 bg-slate-50 text-slate-900 border-t border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="block text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          <div className="w-10 h-0.5 bg-amber-500 rounded-full mx-auto mt-2"></div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Office Details & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">

            {/* Quick Contact Box */}
            <div className="bg-white rounded-xl p-6 sm:p-8 space-y-6 border border-slate-200 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-slate-900" />
                Immediate Legal Consultation
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you face an urgent court hearing or require steady business/family counsel, Advocate Zubair Mahmood handles your matter personally.
              </p>

              {/* Direct Action Phone Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href="tel:+923194959420"
                  className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500">Firm Contact Line</span>
                      <span className="font-semibold text-slate-900">
                        +92 319 4959420
                      </span>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-medium">
                    24/7 Available
                  </span>
                </a>

                <a
                  href="tel:+923004714001"
                  className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500">Advocate Zubair Mahmood Direct</span>
                      <span className="font-semibold text-slate-900">
                        +92 300 4714001
                      </span>
                    </div>
                  </div>
                  <span className="text-xs bg-slate-200 text-slate-900 px-2.5 py-1 rounded-full font-medium">
                    Direct High Court Advocate
                  </span>
                </a>
              </div>

              {/* Office Locations */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-start gap-3.5">
                  <Building2 className="w-5 h-5 text-slate-700 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Main Office (Saleemi Chambers):</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Room # 3-9 Basement, Saleemi Chambers, 15-Edward Road, Lahore.
                    </p>
                    <p className="text-xs text-slate-600 font-mono">Ph: 042-37230133 / 042-37039933</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-slate-700 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">DHA Phase 3 Branch:</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Y Block Main Market, Sector Y, DHA Phase 3, Lahore 54793.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-slate-700 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Official Email:</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      zubair_ramday@hotmail.com / contact@zubairlawfirm.com
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Confidential Legal Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-6 sm:p-10 border border-slate-200 shadow-sm">

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    Consultation Request Received
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you. Founder Advocate Zubair Mahmood or our senior legal team will review your case details and contact you shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-md bg-slate-100 text-slate-800 text-sm hover:bg-slate-200 transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">
                      Schedule a Legal Consultation
                    </h3>
                    <p className="text-sm text-slate-600">
                      Fill out your case summary. All communications are strictly privileged and confidential.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Muhammad Ali"
                        className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Legal Service Required *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                      >
                        <option value="Family Law & Khula">Family Law (Divorce, Child Custody, Khula)</option>
                        <option value="Criminal Defence & Bail">Criminal Defence & High Court Bail</option>
                        <option value="Property & Land Litigation">Property & Land Litigation</option>
                        <option value="Taxation & FBR Tribunals">Taxation & Sales Tax Appeals</option>
                        <option value="Corporate & Commercial Agreements">Corporate & Commercial Agreements</option>
                        <option value="Overseas Pakistanis Power of Attorney">Overseas Pakistanis Legal Matters</option>
                        <option value="Other Legal Advisory">Other Legal Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Brief Description of Your Case *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please summarize your dispute, current status, or upcoming court hearing..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-md bg-[#ca8a04] hover:bg-[#a16207] text-white font-bold text-base transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-5 h-5" />
                    Submit Confidential Case Briefing
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    🔒 Protected by Attorney-Client Privilege. We respond within 2 hours.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

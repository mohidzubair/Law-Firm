import React from "react";
import Link from "next/link";
import { 
  Globe2, 
  ShieldCheck, 
  Phone
} from "lucide-react";

export const metadata = {
  title: "Overseas Pakistanis Legal Services | Power of Attorney & Property Protection",
  description:
    "Legal protection for Pakistanis in UK, USA, UAE, Canada & EU. Embassy Power of Attorney, property grab litigation in Lahore, MOFA attestation, & family matters.",
};

export default function OverseasPakistanisPage() {
  const benefits = [
    {
      title: "Embassy Power of Attorney (POA) Drafting",
      desc: "We draft custom Special or General Power of Attorney documents complying with High Court standards, facilitating seamless attestation at Pakistani High Commissions & Consulates abroad.",
    },
    {
      title: "Property Possession & Land Grab Protection",
      desc: "If illegal occupants or relatives have encroached on your house, commercial land, or housing society plot in Lahore, we file urgent court stay orders and possession writs.",
    },
    {
      title: "Inheritance Distribution & Partition Suits",
      desc: "Securing your legal share in ancestral estates, commercial buildings, or agricultural land across Punjab without requiring your physical presence in Pakistan.",
    },
    {
      title: "Foreign Divorce, Khula & NADRA Registration",
      desc: "Legal recognition of foreign divorce decrees, filing Khula or dissolution petitions in Lahore Family Courts, and obtaining NADRA Computerized Marriage/Divorce Certificates.",
    },
    {
      title: "MOFA & Ministry Attestation Services",
      desc: "End-to-end attestation at the Ministry of Foreign Affairs (MOFA), District Courts, and Divisional Revenue Offices in Lahore.",
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      
      {/* Banner */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="block text-xs font-bold text-amber-600 uppercase tracking-widest">
            WORLDWIDE PAKISTANI LEGAL DEFENSE
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Legal Services for <span className="text-slate-900">Overseas Pakistanis</span>
          </h1>
          <div className="w-10 h-0.5 bg-amber-500 rounded-full mx-auto"></div>

          <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm pt-1">
            Protecting your property, inheritance, and family interests in Lahore while you reside in UK, USA, UAE, Canada, EU, or Gulf.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[#ca8a04] flex items-center justify-center text-white shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900">
                  {b.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {b.desc}
                </p>
              </div>
            ))}

            {/* Direct Contact CTA Card */}
            <div className="bg-[#ca8a04] text-white rounded-xl p-6 border border-amber-600 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-white mb-2">
                  Have an Urgent Overseas Property Dispute?
                </h3>
                <p className="text-xs text-amber-50 leading-relaxed mb-4 font-sans">
                  Speak directly with Senior Advocate High Court Zubair Mahmood on WhatsApp or schedule a Zoom consultation.
                </p>
              </div>
              <a
                href="https://wa.me/+923194959420?text=Hello%20Advocate%20Zubair,%20I%20am%20an%20Overseas%20Pakistani%20and%20need%20legal%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-md bg-amber-950 text-white font-bold text-xs text-center hover:bg-amber-900 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                WhatsApp Advocate Direct
              </a>
            </div>

          </div>

          {/* Process Timeline */}
          <div className="bg-slate-50 rounded-xl p-6 sm:p-10 border border-slate-200 space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="block text-xs font-bold text-[#ca8a04] uppercase tracking-widest mb-1">
                STEP-BY-STEP PROCESS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                How Overseas Power of Attorney Works
              </h2>
              <div className="w-10 h-0.5 bg-[#ca8a04] rounded-full mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Drafting", text: "We draft tailored Special Power of Attorney according to Lahore High Court guidelines." },
                { step: "02", title: "Embassy Attestation", text: "You sign the draft before the Pakistani Embassy or Consulate in your country of residence." },
                { step: "03", title: "MOFA Verification", text: "We receive the physical POA in Lahore and get it attested at Ministry of Foreign Affairs (MOFA)." },
                { step: "04", title: "Court Representation", text: "Advocate Zubair Mahmood initiates legal action in court on your behalf with full regular updates." },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-white border border-slate-200 space-y-1.5 shadow-sm">
                  <span className="font-sans font-bold text-xl text-[#ca8a04]">{item.step}</span>
                  <h4 className="font-serif font-bold text-slate-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

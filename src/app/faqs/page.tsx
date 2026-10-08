import React from "react";
import Link from "next/link";
import { HelpCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Legal FAQs & Guides | Zubair Law Firm Lahore",
  description:
    "Frequently Asked Questions on Pakistani legal procedures, Family Law & Khula timelines, High Court Bail applications, Property land grab disputes, and Tax appeals at Zubair Law Firm.",
};

export default function FaqsPage() {
  const faqs = [
    {
      q: "How long does a Khula or Divorce case take in Lahore Family Courts?",
      a: "Under Pakistani West Pakistan Family Courts Act, 1964, a Khula suit generally takes 2 to 4 months if uncontested, and up to 6 months if contested. Family courts follow mandatory timeline schedules for pre-trial reconciliation and evidence.",
      category: "Family Law",
    },
    {
      q: "What is the procedure for filing Pre-Arrest Bail in the Lahore High Court?",
      a: "Pre-Arrest Bail (Bail Before Arrest) is filed under Section 498 CrPC to protect an accused person from mala fide arrest. Advocate Zubair Mahmood files the petition before the High Court or Sessions Court, demonstrating ulterior motives or lack of incriminating evidence.",
      category: "Criminal Law",
    },
    {
      q: "Can an Overseas Pakistani execute a Power of Attorney without visiting Pakistan?",
      a: "Yes. You can execute a Special or General Power of Attorney by signing it before the Pakistani High Commission or Consulate General in your host country (e.g., UK, USA, UAE, Canada). Once attested by the embassy, it is sent to us in Lahore for Ministry of Foreign Affairs (MOFA) attestation.",
      category: "Overseas Pakistanis",
    },
    {
      q: "What documents are required to challenge an FBR tax audit or penalty?",
      a: "You require the FBR Assessment Order or Show-Cause Notice under Section 122/177 of Income Tax Ordinance, NTN certificate, audited financial statements, and previous tax returns. We file an appeal before the Commissioner Appeals and Appellate Tribunal.",
      category: "Taxation",
    },
    {
      q: "How can I protect my property in Lahore from illegal encroachers or land grabbers?",
      a: "We file an urgent Suit for Permanent Injunction and Stay Order under Civil Procedure Code, along with complaints under the Illegal Dispossession Act, 2005 before the Sessions Court for swift police intervention and recovery of possession.",
      category: "Property Law",
    },
    {
      q: "What are your legal consultation fees at Zubair Law Firm?",
      a: "We provide transparent, upfront legal fee quotes prior to initiating any case. Initial phone/WhatsApp consultations for case evaluation are free of charge. Retainer and court litigation fees are fixed according to case complexity.",
      category: "General Legal",
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      
      {/* Header */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="block text-xs font-bold text-amber-600 uppercase tracking-widest">
            LEGAL GUIDANCE & Q&A
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Frequently Asked <span className="text-slate-900">Legal Questions</span>
          </h1>
          <div className="w-10 h-0.5 bg-amber-500 rounded-full mx-auto"></div>

          <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm pt-1">
            Answers to common queries regarding Pakistani law, court procedures, timelines, and legal remedies.
          </p>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200 space-y-2 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-white text-slate-800 border border-slate-200 text-[11px] font-semibold">
                  {faq.category}
                </span>
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900">
                {faq.q}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1 border-t border-slate-200 font-sans">
                {faq.a}
              </p>
            </div>
          ))}

          {/* CTA Box */}
          <div className="pt-6 text-center bg-slate-900 text-white rounded-xl p-8 border border-slate-800 space-y-3">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
              Have a Specific Question About Your Case?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto font-sans">
              Our Founder Advocate Zubair Mahmood is available to provide personalized legal evaluation.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/+923194959420?text=Hello%20Zubair%20Law%20Firm,%20I%20have%20a%20legal%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 fill-slate-900" />
                Ask Advocate on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

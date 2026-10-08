import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Award, 
  CheckCircle2, 
  Building2, 
  Scale, 
  Phone,
  GraduationCap
} from "lucide-react";

export const metadata = {
  title: "About Advocate Zubair Mahmood | Founder of Zubair Law Firm",
  description:
    "Learn about Senior Advocate High Court Zubair Mahmood (LLB, BA). Founder of Zubair Law Firm with over 25 years experience, member LHCBA, legal advisor to Iqbal Avenue Housing Society & Hijaz Hospital.",
};

export default function AboutPage() {
  const experiences = [
    {
      role: "Founder & Senior Counsel",
      organization: "Zubair Law Firm / Amin Law Associates",
      period: "July 2012 – Present",
      description:
        "Drafting, pleading, and conducting high-stakes litigation before Civil Courts, Sessions Courts, Service Tribunals, and Lahore High Court in Civil, Corporate, Criminal, and Tax matters.",
    },
    {
      role: "Senior Associate & Legal Editor",
      organization: "MIS Tax Forum Consultants",
      period: "April 2001 – June 2004",
      description:
        "Assisted private and public limited companies in Sales Tax & Income Tax litigation before Appellate Tribunals & Lahore High Court. Active contributor to monthly 'TAX FORUM' law journal.",
    },
    {
      role: "Associate Advocate",
      organization: "Zafar Kalanauri & Associates",
      period: "April 1998 – April 2001",
      description:
        "Assisted Mian Iqbal Hussain Kalanauri (Senior Advocate Supreme Court) & Mian Zafar Iqbal Kalanauri (Advocate Supreme Court) in Civil, Criminal, Family, Rent, and Banking litigation.",
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      
      {/* Hero Header */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="block text-xs font-bold text-amber-600 uppercase tracking-widest">
            FOUNDER & SENIOR ADVOCATE
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Advocate <span className="text-slate-900">Zubair Mahmood</span>
          </h1>
          <div className="w-10 h-0.5 bg-amber-500 rounded-full mx-auto"></div>

          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base pt-1">
            Founder of Zubair Law Firm and Senior Advocate High Court with over 25 years of active trial advocacy, corporate advisory, and legal counsel in Lahore, Pakistan.
          </p>
        </div>
      </section>

      {/* Main Profile Bio */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-200 p-2 shadow-sm">
                <Image
                  src="/images/advocate_zubair.png"
                  alt="Advocate Zubair Mahmood High Court Senior Lawyer"
                  width={500}
                  height={600}
                  className="rounded-lg w-full h-[420px] object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              
              <span className="block text-xs font-bold text-amber-600 uppercase tracking-widest">
                ACADEMIC & LITIGATION CREDENTIALS
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Academic Excellence & <span className="text-slate-900">Courtroom Experience</span>
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 rounded-full"></div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Advocate Zubair Mahmood completed his <strong className="text-slate-900">Bachelors in Law (LLB)</strong> from Islamia University Bahawalpur (1993-1996) after completing his <strong className="text-slate-900">Bachelors of Arts (BA)</strong> (1990-1992). Enrolled with the <span className="text-slate-900 font-semibold">Punjab Bar Council</span>, he is an active member of both the <span className="text-slate-900 font-semibold">Lahore High Court Bar Association</span> and the <span className="text-slate-900 font-semibold">Lahore Bar Association</span>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-sans font-bold text-xs sm:text-sm">
                    <GraduationCap className="w-4 h-4 text-[#ca8a04]" /> Academic Degree
                  </div>
                  <p className="text-xs text-slate-600">
                    B.A., LL.B. (Islamia University Bahawalpur, 1996)
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-sans font-bold text-xs sm:text-sm">
                    <Award className="w-4 h-4 text-[#ca8a04]" /> Bar Enrollments
                  </div>
                  <p className="text-xs text-slate-600">
                    Lahore High Court Bar Association & Punjab Bar Council
                  </p>
                </div>
              </div>

              {/* Institutional Advisorships */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-serif text-base font-bold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#ca8a04]" />
                  Current Key Institutional Advisorships
                </h3>
                <ul className="space-y-2 text-xs text-slate-700 font-sans">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ca8a04] shrink-0" />
                    <span><strong>Iqbal Avenue Co-operative Housing Society</strong> (Near Shaukat Khanum Hospital, Johar Town, Lahore)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ca8a04] shrink-0" />
                    <span><strong>Hijaz Hospital & Hijaz Social Welfare Society</strong> (Sir Syed Road, Gulberg-III, Lahore)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ca8a04] shrink-0" />
                    <span>Corporate Legal Counsel to Textile Mills, Spinning Mills, & Public Limited Companies</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Career Trajectory Timeline */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="block text-xs font-bold text-[#ca8a04] uppercase tracking-widest mb-1">
              CAREER HIGHLIGHTS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Professional <span className="text-slate-900">Career History</span>
            </h2>
            <div className="w-10 h-0.5 bg-[#ca8a04] rounded-full mx-auto mt-2"></div>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div>
                  <span className="text-xs font-bold text-[#ca8a04] bg-amber-100 px-2.5 py-1 rounded border border-amber-200">{exp.period}</span>
                  <h3 className="font-serif font-bold text-base text-slate-900 mt-2">{exp.role}</h3>
                  <p className="text-xs font-semibold text-slate-700 mb-2">{exp.organization}</p>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-3xl font-sans">{exp.description}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#ca8a04] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Scale className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#ca8a04] text-white font-bold text-xs hover:bg-[#a16207] transition-colors shadow-md"
            >
              <Phone className="w-4 h-4 fill-white" />
              Schedule a Consultation with Advocate Zubair
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

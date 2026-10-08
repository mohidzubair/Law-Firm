import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Scale,
  ShieldCheck,
  Award,
  Building2,
  Users,
  FileText,
  Phone,
  CheckCircle2,
  ArrowRight,
  Gavel,
  Briefcase,
  HeartHandshake,
  Sparkles,
  Globe2,
  Clock,
  ChevronRight
} from "lucide-react";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Zubair Law Firm | Law Firm in Lahore | Advocate Zubair Mahmood",
  description:
    "Zubair Law Firm is a top-rated law firm in Lahore founded by Senior Advocate High Court Zubair Mahmood. Expert counsel in Family Law, Khula, Criminal Defence, Property Litigation, Tax Appeals, & Overseas Pakistanis Law.",
};

export default function HomePage() {
  const services = [
    {
      id: "family-law",
      num: "01",
      title: "Family Law & Matrimonial Disputes",
      subtitle: "Divorce, Khula, Child Custody, Maintenance & Inheritance",
      desc: "Sensitive legal matters require experienced advocacy. Divorce proceedings, Khula petitions, child custody, and maintenance claims in Lahore Family Courts.",
      icon: HeartHandshake,
      highlights: ["Khula & Divorce Petitions", "Child Custody & Guardianship"],
      link: "/services#family",
    },
    {
      id: "criminal-defence",
      num: "02",
      title: "Criminal Defence & Trial Advocacy",
      subtitle: "Bail Applications, FIA/NAB Offences & High Court Appeals",
      desc: "Aggressive defence representation from investigation through trial. Pre-arrest bail, post-arrest bail, white-collar crime, and High Court appeals.",
      icon: Gavel,
      highlights: ["High Court Bail Applications", "FIA & NAB Investigations"],
      link: "/services#criminal",
    },
    {
      id: "property-litigation",
      num: "03",
      title: "Civil & Property Litigation",
      subtitle: "Land Disputes, Housing Society Writs & Partition Suits",
      desc: "Comprehensive protection of real estate assets. Land acquisition, housing society disputes (including Iqbal Avenue Housing Society), possession, and stay orders.",
      icon: Building2,
      highlights: ["Housing Society Litigation", "Partition & Title Disputes"],
      link: "/services#property",
    },
    {
      id: "taxation-corporate",
      num: "04",
      title: "Taxation & Corporate Revenue",
      subtitle: "Sales Tax, Income Tax, FBR Audits & Appellate Tribunals",
      desc: "Proven revenue & corporate litigation track record. Sales Tax & Income Tax appeals before Appellate Tribunals and company legal advisory.",
      icon: Briefcase,
      highlights: ["Customs & Sales Tax Tribunals", "FBR Tax Audit Appeals"],
      link: "/services#taxation",
    },
    {
      id: "overseas-pakistanis",
      num: "05",
      title: "Overseas Pakistanis Legal Hub",
      subtitle: "Power of Attorney, Property Protection & Embassy Attestations",
      desc: "Tailored legal protection for Pakistanis in UK, USA, UAE, Canada & EU. Power of Attorney validation, MOFA attestation, and property dispute recovery.",
      icon: Globe2,
      highlights: ["Embassy Power of Attorney (POA)", "Overseas Property Grab Recovery"],
      link: "/overseas-pakistanis",
    },
  ];

  const stats = [
    { label: "Years Court Experience", value: "25+" },
    { label: "Successful Cases Handled", value: "800+" },
    { label: "Managing Advocate", value: "High Court" },
    { label: "Key Practice Areas", value: "5 Core" },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans">

      {/* 1. HERO SECTION (Fills screen viewport cleanly) */}
      <section className="relative min-h-[calc(100vh-140px)] flex flex-col justify-center pt-6 pb-10 lg:pt-10 lg:pb-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-3.5 text-center lg:text-left">

              {/* Category Subtitle matching image format */}
              <span className="block text-xs font-bold text-amber-600 uppercase tracking-widest">
                LAW FIRM IN LAHORE
              </span>

              {/* Main Heading matching image format */}
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Courtroom Mastery & <span className="text-slate-900">Unyielding Legal Advocacy</span>
              </h1>
              <div className="w-10 h-0.5 bg-amber-500 rounded-full mx-auto lg:mx-0"></div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans pt-1">
                <strong className="text-slate-900">Zubair Law Firm</strong>, led by <span className="text-slate-900 font-semibold">Senior Advocate High Court Zubair Mahmood</span>, delivers straightforward legal counsel, upfront pricing, and aggressive representation across Lahore High Court, Family Courts & District Courts.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="https://wa.me/+923194959420?text=Hello%20Zubair%20Law%20Firm,%20I%20need%20legal%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-[#ca8a04] hover:bg-[#a16207] text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  Book Confidential Consultation
                </a>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-white border border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Chambers Location</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-700" />
                </Link>
              </div>

              {/* Quick Trust Highlights Boxes */}
              <div className="pt-3 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm">
                    <span className="block font-sans text-lg sm:text-xl font-extrabold text-[#ca8a04]">
                      {stat.value}
                    </span>
                    <span className="block text-[11px] text-slate-600 font-medium leading-tight mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Visual Image Card (Lower blue row removed as requested) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative rounded-xl bg-white overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/images/hero_bg.png"
                    alt="Zubair Law Firm Lahore Office"
                    width={600}
                    height={400}
                    priority
                    className="w-full h-[260px] sm:h-[300px] lg:h-[340px] object-cover object-center"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT THE FIRM & MANAGING PARTNER */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Image: Advocate Zubair Mahmood Portrait */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden bg-white border border-slate-200 p-2 shadow-sm">
                <Image
                  src="/images/advocate_zubair.png"
                  alt="Advocate Zubair Mahmood High Court Senior Lawyer"
                  width={500}
                  height={600}
                  className="rounded-lg w-full h-[380px] object-cover object-top"
                />

                <div className="p-3 bg-slate-50 rounded-b-lg border-t border-slate-200 mt-2 space-y-0.5">
                  <h4 className="font-sans font-bold text-slate-900 text-base">
                    Advocate Zubair Mahmood
                  </h4>
                  <p className="text-xs text-slate-700 font-medium">
                    B.A., LL.B. (Islamia University Bahawalpur) • Senior High Court Advocate
                  </p>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">

              <span className="block text-xs font-bold text-amber-600 uppercase tracking-widest">
                BUILT ON TRUST & RESULTS
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                About Zubair Law Firm & <span className="text-slate-900">Advocate Zubair Mahmood</span>
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 rounded-full"></div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Founded by <strong className="text-slate-900">Senior Advocate High Court Zubair Mahmood</strong>, <strong className="text-slate-900">Zubair Law Firm</strong> is one of Lahore’s most trusted full-service legal practices. We have successfully represented individual clients, corporate entities, housing societies, and healthcare institutions across Pakistan.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Advocate Zubair Mahmood brings over 25 years of active legal experience in drafting pleadings, conducting complex litigation, and rendering expert legal opinions. He currently serves as Legal Advisor to major institutions including <span className="text-slate-900 font-semibold">Iqbal Avenue Co-operative Housing Society</span> and <span className="text-slate-900 font-semibold">Hijaz Hospital & Social Welfare Society</span>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">Transparent Fee Structure</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">Upfront fee quotes with zero hidden charges or unexpected bills.</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">Direct Senior Advocacy</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">Your case is managed directly by Senior Advocate Zubair Mahmood.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/about"
                  className="px-5 py-2.5 rounded-md bg-[#ca8a04] hover:bg-[#a16207] text-white font-bold text-xs transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span>Read Full Profile & Credentials</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. THE 5 CORE LEGAL SERVICES SECTION (Compact single screen fit matching Image 2) */}
      <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="block text-xs font-bold text-[#ca8a04] uppercase tracking-widest mb-1">
              OUR SERVICES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Guiding You Through <span className="text-slate-900">Legal Challenges</span>
            </h2>
            <div className="w-10 h-0.5 bg-[#ca8a04] rounded-full mx-auto mt-2"></div>
          </div>

          {/* Compact Services Grid (Fits Single Screen View matching Image 2) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((svc) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="bg-white rounded-lg p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-amber-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-md bg-amber-50 border border-amber-200 flex items-center justify-center text-[#ca8a04]">
                        <IconComp className="w-4 h-4 text-[#ca8a04]" />
                      </div>
                      <span className="font-sans font-bold text-lg text-[#ca8a04]/40">
                        {svc.num}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-base text-slate-900 mb-1">
                      {svc.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-slate-600 mb-2">
                      {svc.subtitle}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">
                      {svc.desc}
                    </p>
                  </div>

                  <Link
                    href={svc.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#ca8a04] pt-1 border-t border-slate-100 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              );
            })}

            {/* Extra 6th Custom Service Card */}
            <div className="bg-[#ca8a04] text-white rounded-lg p-4 sm:p-5 border border-amber-600 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-md bg-amber-700/50 flex items-center justify-center text-white">
                    <Scale className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-sans font-bold text-lg text-amber-200">
                    06
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-white mb-1">
                  Custom Legal Counsel
                </h3>
                <p className="text-[11px] font-semibold text-amber-100 mb-2">
                  High Court Writs & Appeals
                </p>
                <p className="text-xs text-amber-50 leading-relaxed mb-3 line-clamp-2">
                  Service Tribunal appeals, Cantonment Courts, and NAB Appellate Forums representation.
                </p>
              </div>

              <a
                href="https://wa.me/+923194959420?text=Hello%20Zubair%20Law%20Firm,%20I%20have%20a%20custom%20legal%20query."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-md bg-amber-950 text-white font-bold text-xs text-center hover:bg-amber-900 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                Consult Advocate Direct
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 4. COURTS WE APPEAR BEFORE */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="block text-xs font-bold text-[#ca8a04] uppercase tracking-widest mb-1">
              COURTS WE PRACTICE BEFORE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Judicial Forums & High Court
            </h3>
            <div className="w-10 h-0.5 bg-[#ca8a04] rounded-full mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {[
              "Lahore High Court",
              "District & Sessions Courts",
              "Family Courts Lahore",
              "Customs & Tax Tribunals",
              "Punjab Services Tribunal",
              "Cantonment Courts",
            ].map((court, i) => (
              <div
                key={i}
                className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200 hover:border-[#ca8a04] hover:bg-amber-100/50 transition-all duration-200 space-y-1.5 shadow-sm group"
              >
                <Gavel className="w-4 h-4 text-[#ca8a04] mx-auto group-hover:scale-110 transition-transform" />
                <span className="block text-xs font-bold text-slate-900">
                  {court}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY CLIENTS CHOOSE ZUBAIR LAW FIRM */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-6 space-y-4">
              <span className="block text-xs font-bold text-[#ca8a04] uppercase tracking-widest">
                OUR BENEFITS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Why Clients Choose <span className="text-slate-900">Zubair Law Firm</span>
              </h2>
              <div className="w-10 h-0.5 bg-[#ca8a04] rounded-full"></div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-200 text-[#ca8a04] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 text-sm">Transparent from Day One</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      You get an honest evaluation of your case, realistic timelines, and fixed fee quotes upfront. No hidden costs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-200 text-[#ca8a04] flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 text-sm">Over 25 Years of Courtroom Experience</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Deep familiarity with judicial procedures in the Lahore High Court, District Courts, and Tax Tribunals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-200 text-[#ca8a04] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 text-sm">Lead Partner Direct Representation</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      The lawyer you meet during your consultation is the one who handles and pleads your case in court.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Office Building Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm">
                <Image
                  src="/images/office_building.png"
                  alt="Zubair Law Firm Office Building Lahore"
                  width={600}
                  height={500}
                  className="w-full h-[380px] object-cover"
                />

                <div className="bg-[#ca8a04] text-white p-5 border-t border-amber-600">
                  <span className="text-xs font-bold text-amber-100 tracking-wider uppercase">
                    Saleemi Chambers & DHA Branch
                  </span>
                  <h3 className="font-sans font-bold text-xl text-white mt-1">
                    State-of-the-Art Law Offices in Lahore
                  </h3>
                  <p className="text-xs text-amber-50 mt-1">
                    Equipped with complete legal archives, digital law research, and comfortable consultation suites.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. CONTACT US AT THE END OF HOME PAGE */}
      <ContactSection />

    </div>
  );
}

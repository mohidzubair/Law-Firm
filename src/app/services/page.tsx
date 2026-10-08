import React from "react";
import Link from "next/link";
import { 
  HeartHandshake, 
  Gavel, 
  Building2, 
  Briefcase, 
  Globe2, 
  CheckCircle2, 
  Phone, 
  FileText, 
  ShieldCheck 
} from "lucide-react";

export const metadata = {
  title: "Legal Services & Practice Areas | Zubair Law Firm Lahore",
  description:
    "Explore our 5 core legal services at Zubair Law Firm: Family Law & Khula, Criminal Defence & High Court Bails, Civil & Property Litigation, Tax Appeals & Corporate Advisory, and Overseas Pakistanis Law.",
};

export default function ServicesPage() {
  const detailedServices = [
    {
      id: "family",
      title: "1. Family Law & Matrimonial Litigation",
      tagline: "Divorce, Khula, Child Custody, Dower & Maintenance",
      description:
        "Matrimonial and family disputes require a legal hand that balances legal firmness with personal empathy. We represent husbands and wives before Family Courts across Lahore in divorce suits, Khula decrees, custody of minors, and dower enforcement.",
      process: [
        "Initial confidential family case evaluation & legal notice preparation.",
        "Filing suit for Khula, Dissolution of Marriage, or Maintenance in Family Court.",
        "Pre-trial reconciliation proceedings before the Family Judge.",
        "Evidence recording, cross-examination, and final judicial decree.",
      ],
      docsNeeded: ["CNIC copies of spouses", "Nikahnama / Marriage Certificate", "Birth certificates of children", "List of dower items"],
      icon: HeartHandshake,
    },
    {
      id: "criminal",
      title: "2. Criminal Defence & Trial Advocacy",
      tagline: "Pre-Arrest Bail, Post-Arrest Bail, Sessions & High Court Trials",
      description:
        "When your personal liberty or reputation is threatened by criminal allegations, immediate legal action is vital. Advocate Zubair Mahmood brings over 25 years of criminal trial experience before Sessions Courts, NAB/FIA forums, and Lahore High Court.",
      process: [
        "Rapid intervention during FIR registration & police investigation.",
        "Filing Pre-Arrest (Bail Before Arrest) to protect client from illegal detention.",
        "Post-Arrest Bail application before Sessions & High Court.",
        "Formulating trial defence strategy, cross-examining prosecution witnesses, and High Court appeals.",
      ],
      docsNeeded: ["Copy of FIR / Complaint", "Arrest memo or remand order", "Alibi or documentary proof", "Previous court orders"],
      icon: Gavel,
    },
    {
      id: "property",
      title: "3. Civil & Property Litigation",
      tagline: "Land Disputes, Housing Society Conflicts & Partition Suits",
      description:
        "Property disputes in Pakistan often involve complex land revenue records, illegal dispossession, housing society irregularities, and inheritance claims. We provide comprehensive title search, stay orders, and litigation representation.",
      process: [
        "Detailed inspection of Fard-e-Malkiyat, Khasra numbers, and registry records.",
        "Filing civil suit for Permanent Injunction, Stay Order, or Declaration of Title.",
        "Litigation against housing societies (e.g. Iqbal Avenue Housing Society disputes).",
        "Execution of court decree and revenue record mutation (Intiqal).",
      ],
      docsNeeded: ["Property Registry / Sale Deed", "Fard Malkiyat & Aks Shajra", "Housing society allotment letter", "Dispute notices"],
      icon: Building2,
    },
    {
      id: "taxation",
      title: "4. Taxation & Corporate Revenue Law",
      tagline: "Sales Tax, Income Tax, FBR Audits & Appellate Tribunals",
      description:
        "Specialized tax advocacy for businesses, textile mills, healthcare institutions, and private individuals. Experienced in tax audits, penalty challenges, and appellate proceedings before the Customs, Excise & Sales Tax Appellate Tribunal.",
      process: [
        "Reviewing FBR audit notices, show-cause notices, and assessment orders.",
        "Filing written replies and legal objections before the Commissioner Appeals.",
        "Formulating constitutional tax writs before the Lahore High Court.",
        "Corporate legal retainer & contract drafting for compliance.",
      ],
      docsNeeded: ["NTN & STRN certificates", "FBR show-cause / assessment order", "Tax returns & financial audits", "Corporate incorporation documents"],
      icon: Briefcase,
    },
    {
      id: "overseas",
      title: "5. Overseas Pakistanis Legal Services Hub",
      tagline: "Power of Attorney, Embassy Attestations & Land Protection",
      description:
        "Dedicated legal defense for Pakistanis living in the UK, USA, UAE, Canada, EU & worldwide. We manage your property, inheritance, family, and court matters in Lahore through verified Power of Attorney without requiring your travel.",
      process: [
        "Drafting special or general Power of Attorney tailored for Embassy attestation.",
        "MOFA attestation & local registration in Lahore Revenue Department.",
        "Filing legal actions or defending property against illegal occupation.",
        "Regular virtual case briefings and progress reports.",
      ],
      docsNeeded: ["Valid Passport & NICOP copy", "Attested Power of Attorney from Embassy", "Property details / dispute records"],
      icon: Globe2,
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      
      {/* Page Header */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="block text-xs font-bold text-amber-600 uppercase tracking-widest">
            FULL SERVICE PRACTICE AREAS
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Our Core <span className="text-slate-900">Legal Services</span>
          </h1>
          <div className="w-10 h-0.5 bg-amber-500 rounded-full mx-auto"></div>

          <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm pt-1">
            Detailed breakdown of our 5 legal practice areas led by Senior Advocate High Court Zubair Mahmood.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {detailedServices.map((svc) => {
            const IconComp = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200 space-y-6 scroll-mt-24"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#ca8a04] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <IconComp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
                        {svc.title}
                      </h2>
                      <p className="text-xs font-semibold text-slate-600 mt-0.5">
                        {svc.tagline}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/+923194959420?text=Hello%20Zubair%20Law%20Firm,%20I%20need%20assistance%20with%20${encodeURIComponent(svc.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md bg-[#ca8a04] text-white font-bold text-xs hover:bg-[#a16207] transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 fill-white" />
                    Consult Advocate
                  </a>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {svc.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                  
                  {/* Step-by-Step Process */}
                  <div className="bg-white p-5 rounded-lg border border-slate-200 space-y-2.5">
                    <h3 className="font-serif font-bold text-slate-900 text-sm flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#ca8a04]" />
                      Legal Step-by-Step Procedure
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-700 font-sans">
                      {svc.process.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-amber-100 text-[#ca8a04] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Documents Required */}
                  <div className="bg-white p-5 rounded-lg border border-slate-200 space-y-2.5">
                    <h3 className="font-serif font-bold text-slate-900 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ca8a04]" />
                      Recommended Initial Documents
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-700 font-sans">
                      {svc.docsNeeded.map((doc, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ca8a04] shrink-0" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

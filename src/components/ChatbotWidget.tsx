"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  Bot,
  User,
  ChevronRight,
  Sparkles,
  Scale
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: { label: string; action: () => void }[];
  ctaLink?: { label: string; href: string; icon?: string }[];
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Assalamu Alaikum! Welcome to Zubair Law Firm",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const quickQuestions = [
    { label: "⚖️ Evaluate My Case", query: "case evaluation" },
    { label: "📍 Office Address", query: "location" },
    { label: "👨‍⚖️ Founder Adv. Zubair", query: "attorney" },
    { label: "🌍 Overseas Power of Attorney", query: "overseas" },
    { label: "📞 Book Consultation", query: "booking" },
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Add User Message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      generateBotResponse(query);
      setIsTyping(false);
    }, 600);
  };

  const analyzeLegalCase = (text: string) => {
    const lower = text.toLowerCase();

    // 1. Family Law / Khula / Custody / Maintenance
    if (
      lower.includes("khula") ||
      lower.includes("divorce") ||
      lower.includes("custody") ||
      lower.includes("maintenance") ||
      lower.includes("kharcha") ||
      lower.includes("dower") ||
      lower.includes("dowry") ||
      lower.includes("jahez") ||
      lower.includes("talaq") ||
      lower.includes("husband") ||
      lower.includes("wife") ||
      lower.includes("marriage") ||
      lower.includes("nikah") ||
      lower.includes("guardianship")
    ) {
      return {
        caseType: "Family Law & Matrimonial Dispute (Khula / Child Custody / Maintenance)",
        court: "Family Court / Senior Civil Judge (Family Division), Lahore",
        guidance: "Under the West Pakistan Family Courts Act 1964, family matters are trial-expedited in dedicated Family Courts for Khula, child custody, and recovery of dower/maintenance.",
      };
    }

    // 2. Rent & Tenancy
    if (lower.includes("tenant") || lower.includes("rent") || lower.includes("eviction") || lower.includes("landlord")) {
      return {
        caseType: "Rent & Tenancy Dispute",
        court: "Special Rent Controller / Rent Tribunal, Lahore",
        guidance: "Governed under the Punjab Rented Premises Act 2009 for eviction petitions, lease agreement compliance, and rent arrears recovery.",
      };
    }

    // 3. Property / Land / Possession / Stay Order / Partition
    if (
      lower.includes("property") ||
      lower.includes("land") ||
      lower.includes("plot") ||
      lower.includes("house") ||
      lower.includes("possession") ||
      lower.includes("kabza") ||
      lower.includes("grab") ||
      lower.includes("stay") ||
      lower.includes("injunction") ||
      lower.includes("partition") ||
      lower.includes("registry") ||
      lower.includes("inteqal") ||
      lower.includes("patwari") ||
      lower.includes("builder")
    ) {
      return {
        caseType: "Civil & Property Litigation (Land Dispute / Stay Order / Partition Suit)",
        court: "Civil Court (Civil Judge 1st Class) / District & Sessions Court, Lahore",
        guidance: "Adjudicated under the Code of Civil Procedure (CPC 1908). Urgent stay orders (injunctions) can be obtained to protect ownership title and physical possession.",
      };
    }

    // 4. Cheque Bounce / 489-F PPC / Financial Recovery
    if (
      lower.includes("cheque") ||
      lower.includes("check") ||
      lower.includes("489") ||
      lower.includes("bounce") ||
      lower.includes("dishonor") ||
      lower.includes("loan") ||
      lower.includes("recovery")
    ) {
      return {
        caseType: "Dishonour of Cheque & Financial Recovery (Sec 489-F PPC)",
        court: "Judicial Magistrate (Criminal Side) & Civil Court (Order 37 CPC Summary Suit), Lahore",
        guidance: "Dishonouring a cheque for legal debt is a cognizable criminal offense under Section 489-F PPC. Immediate recovery suit under Order 37 CPC can also be filed.",
      };
    }

    // 5. Criminal Defence / Bail / FIR / Police
    if (
      lower.includes("police") ||
      lower.includes("fir") ||
      lower.includes("bail") ||
      lower.includes("arrest") ||
      lower.includes("jail") ||
      lower.includes("criminal") ||
      lower.includes("theft") ||
      lower.includes("assault") ||
      lower.includes("murder") ||
      lower.includes("quash") ||
      lower.includes("482") ||
      lower.includes("investigation")
    ) {
      return {
        caseType: "Criminal Law Defence & Police Matters (Bail / FIR Proceedings)",
        court: "Judicial Magistrate / Court of Sessions Judge / Lahore High Court",
        guidance: "Petitions for Pre-Arrest Bail (Sec 498 CrPC), Post-Arrest Bail (Sec 497 CrPC), or Quashing of illegal FIRs (Sec 561-A CrPC) before Sessions Court or High Court.",
      };
    }

    // 6. Cybercrime / FIA / Online Fraud / Harassment
    if (
      lower.includes("fia") ||
      lower.includes("cyber") ||
      lower.includes("online") ||
      lower.includes("hacked") ||
      lower.includes("harassment") ||
      lower.includes("scam") ||
      lower.includes("bank fraud")
    ) {
      return {
        caseType: "Cybercrime & Online Offence (PECA Act 2016)",
        court: "Special Court FIA (Cybercrime Division) Lahore / High Court",
        guidance: "Protected under the Prevention of Electronic Crimes Act 2016. Involves FIA Cyber Crime Wing investigation and specialized tribunal proceedings.",
      };
    }

    // 7. Overseas Pakistanis / Power of Attorney
    if (
      lower.includes("overseas") ||
      lower.includes("abroad") ||
      lower.includes("power of attorney") ||
      lower.includes("poa") ||
      lower.includes("embassy") ||
      lower.includes("expat")
    ) {
      return {
        caseType: "Overseas Pakistani Legal Protection & Power of Attorney",
        court: "Overseas Pakistanis Cell (Lahore High Court) & Civil Court Lahore",
        guidance: "Enables non-resident Pakistanis to execute attested Power of Attorney and pursue land dispute litigation without requiring physical presence in Pakistan.",
      };
    }

    // 8. Succession / Inheritance / Certificate
    if (
      lower.includes("inheritance") ||
      lower.includes("warasat") ||
      lower.includes("succession") ||
      lower.includes("deceased") ||
      lower.includes("death certificate") ||
      lower.includes("will")
    ) {
      return {
        caseType: "Succession Certificate & Inheritance Distribution",
        court: "NADRA Succession Facilitation Center / Civil Court Lahore",
        guidance: "Processing of Succession Certificate & Letters of Administration under the Succession Act 1925 or NADRA's expedited portal.",
      };
    }

    // 9. Tax / FBR / Income Tax / Sales Tax
    if (
      lower.includes("tax") ||
      lower.includes("fbr") ||
      lower.includes("income tax") ||
      lower.includes("sales tax") ||
      lower.includes("audit") ||
      lower.includes("penalty") ||
      lower.includes("pra")
    ) {
      return {
        caseType: "Taxation & FBR Revenue Litigation",
        court: "Commissioner Inland Revenue (Appeals) / Appellate Tribunal Inland Revenue / Lahore High Court",
        guidance: "Statutory tax appeals against FBR notices, audit penalties, and recovery orders before Appellate Tribunals and High Court Tax Benches.",
      };
    }

    // 10. Corporate / Business / Contracts
    if (
      lower.includes("company") ||
      lower.includes("business") ||
      lower.includes("corporate") ||
      lower.includes("contract") ||
      lower.includes("agreement") ||
      lower.includes("partnership") ||
      lower.includes("secp") ||
      lower.includes("shareholder")
    ) {
      return {
        caseType: "Corporate & Commercial Agreement Dispute",
        court: "Commercial Bench / Civil Court / Lahore High Court (Company Bench)",
        guidance: "Litigation for breach of agreement, partnership disputes, and SECP compliance under the Companies Act 2017.",
      };
    }

    // Default Case Evaluation
    return {
      caseType: "General Legal Dispute / Court Proceeding",
      court: "District & Sessions Court Lahore / Lahore High Court",
      guidance: "Your query represents a legal matter under Pakistani law. A comprehensive document review by senior legal counsel is required to file appropriate court proceedings.",
    };
  };

  const generateBotResponse = (rawInput: string) => {
    const lowerText = rawInput.toLowerCase();
    let responseText = "";
    let ctas: { label: string; href: string }[] = [];

    if (lowerText.includes("location") || lowerText.includes("address") || lowerText.includes("where") || lowerText.includes("office")) {
      responseText = "Zubair Law Firm has two primary locations in Lahore:\n\n1. Main Office: Room # 3-9 Basement, Saleemi Chambers, 15-Edward Road, Lahore (Ph: 042-37230133).\n\n2. DHA Branch: Y Block Main Market, Sector Y, DHA Phase 3, Lahore (Ph: +92 319 4959420).\n\nWe are available 24/7 for urgent legal consultations.";
      ctas = [
        { label: "Call +92 319 4959420", href: "tel:+923194959420" },
        { label: "View Contact Page & Map", href: "/contact" },
      ];
    } else if (lowerText.includes("zubair") || lowerText.includes("mahmood") || lowerText.includes("attorney") || lowerText.includes("lawyer") || lowerText.includes("founder")) {
      responseText = "Senior Advocate High Court Zubair Mahmood is the Founder & Managing Partner of Zubair Law Firm. He holds an LL.B. and B.A. from Islamia University Bahawalpur with over 25 years of courtroom experience.\n\nHe is an active member of the Lahore High Court Bar Association and Punjab Bar Council, representing clients across High Court & District Courts.";
      ctas = [
        { label: "Read Adv. Zubair Profile", href: "/about" },
        { label: "Call Founder Direct", href: "tel:+923004714001" },
      ];
    } else if (lowerText.includes("booking") || lowerText.includes("book") || lowerText.includes("consult")) {
      responseText = "Zubair Law Firm offers transparent legal consultations. You can contact Senior Advocate High Court Zubair Mahmood directly for appointment booking and case evaluation.";
      ctas = [
        { label: "Call +92 319 4959420", href: "tel:+923194959420" },
        { label: "WhatsApp Consultation", href: "https://wa.me/+923194959420" },
        { label: "Book Online", href: "/contact" },
      ];
    } else if (lowerText === "case evaluation") {
      responseText = "Please type a brief summary of your legal situation or issue (for example: 'My husband filed for custody', 'Cheque bounced of 5 lacs', 'Land dispute in DHA'), and I will instantly analyze the **Case Type** and **Relevant Court** for you!";
      ctas = [
        { label: "Call Adv. Zubair Direct", href: "tel:+923004714001" },
        { label: "WhatsApp Advocate", href: "https://wa.me/+923194959420" },
      ];
    } else {
      // Analyze Case Explanation
      const evaluation = analyzeLegalCase(rawInput);

      responseText = `⚖️ LEGAL CASE EVALUATION\n\n📌 Case Type:\n${evaluation.caseType}\n\n🏛️ Relevant Court / Jurisdiction:\n${evaluation.court}\n\n💡 Legal Overview:\n${evaluation.guidance}\n\n📞 Recommended Next Step:\nPlease contact Senior Advocate High Court Zubair Mahmood at Zubair Law Firm for detailed legal consultation, case evaluation, and court representation.`;

      ctas = [
        { label: "Call +92 319 4959420", href: "tel:+923194959420" },
        { label: "WhatsApp Consultation", href: "https://wa.me/+923194959420" },
        { label: "Visit Contact & Map", href: "/contact" },
      ];
    }

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      sender: "bot",
      text: responseText,
      ctaLink: ctas,
    };

    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <>
      {/* Floating Action Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 font-sans">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#ca8a04] hover:bg-[#a16207] text-white shadow-xl transition-all duration-200"
            aria-label="Ask Chatbot"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="text-left hidden sm:block">
              <span className="block text-xs text-amber-100 font-bold tracking-wider uppercase">
                Instant Assistance
              </span>
              <span className="block text-sm font-semibold text-white">
                Ask Legal Chatbot
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Chatbot Window Modal */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[400px] sm:h-[560px] z-50 flex flex-col bg-white sm:rounded-xl border border-slate-200 shadow-xl overflow-hidden font-sans">

          {/* Header */}
          <div className="bg-[#ca8a04] px-4 py-3 border-b border-amber-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-white/20 flex items-center justify-center text-white">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  Zubair Law Assistant
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </h3>
                <p className="text-[11px] text-amber-100">
                  Founder: Adv. Zubair Mahmood
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded text-amber-100 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Close Chatbot"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Questions Chips */}
          <div className="bg-slate-50 px-3 py-2 border-b border-slate-200 overflow-x-auto flex gap-1.5 scrollbar-none">
            {quickQuestions.map((q) => (
              <button
                key={q.query}
                onClick={() => handleSend(q.query)}
                className="whitespace-nowrap px-3 py-1 rounded-full bg-white hover:bg-slate-100 text-slate-700 text-xs border border-slate-300 transition-colors shrink-0"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center shrink-0 text-amber-400">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-xl px-4 py-3 text-slate-900 leading-relaxed ${msg.sender === "user"
                      ? "bg-slate-900 text-white font-medium shadow-sm"
                      : "bg-white border border-slate-200 shadow-sm whitespace-pre-line"
                    }`}
                >
                  {msg.text}

                  {/* CTA Buttons in Bot Reply */}
                  {msg.ctaLink && msg.ctaLink.length > 0 && (
                    <div className="mt-3 pt-2 border-t border-slate-100 flex flex-wrap gap-2">
                      {msg.ctaLink.map((cta, i) => (
                        <a
                          key={i}
                          href={cta.href}
                          target={cta.href.startsWith("http") ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                        >
                          <span>{cta.label}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center shrink-0 text-slate-700">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-center text-slate-500 text-xs pl-2">
                <div className="w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center text-amber-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="flex gap-1 items-center bg-white px-3 py-2 rounded-lg border border-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your legal issue or case..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-md bg-slate-900 text-white font-bold hover:bg-slate-800 disabled:opacity-50 transition-colors"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}


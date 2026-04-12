"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  contactLink?: string;
  dark?: boolean;
}

export default function FAQSection({ faqs, contactLink = "#contacto", dark = false }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`relative z-20 pt-20 lg:pt-24 pb-20 lg:pb-32 px-6 lg:px-16 ${dark ? "bg-black" : "bg-[#f5f5f3]"}`}>
      <div className="max-w-[700px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className={`w-2 h-2 ${dark ? "bg-white" : "bg-black"}`}></div>
            <span className={`text-sm lg:text-base font-clash uppercase tracking-wide ${dark ? "text-white" : "text-black"}`}>
              Preguntas frecuentes
            </span>
          </div>
          <h2 className={`text-3xl lg:text-5xl font-light !leading-[1.1] ${dark ? "text-white" : "text-black"}`}>
            Todo lo que necesitas<br />
            <span className="font-medium">saber antes de empezar</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className={`border-t ${dark ? "border-white/10" : "border-black/10"}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b ${dark ? "border-white/10" : "border-black/10"}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between py-6 text-left transition-colors ${
                  dark ? "text-white hover:text-white/80" : "text-black hover:text-black/80"
                }`}
              >
                <span className="text-lg lg:text-xl font-medium pr-8">
                  {faq.question}
                </span>
                <span className={`shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}>
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M12 4v16m8-8H4" 
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className={`text-base leading-relaxed ${dark ? "text-white/60" : "text-black/60"}`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className={`text-base ${dark ? "text-white/50" : "text-black/50"}`}>
            ¿Tienes más preguntas?{" "}
            <Link 
              href={contactLink} 
              className={`underline underline-offset-4 transition-colors ${
                dark ? "text-white hover:text-white/80" : "text-black hover:text-black/80"
              }`}
            >
              Contáctanos
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

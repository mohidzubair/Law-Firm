import React from "react";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": "https://zubairlawfirm.com/#organization",
        "name": "Zubair Law Firm",
        "url": "https://zubairlawfirm.com",
        "logo": "https://zubairlawfirm.com/images/hero_bg.png",
        "image": "https://zubairlawfirm.com/images/office_building.png",
        "description": "Leading law firm in Lahore founded by Senior Advocate High Court Zubair Mahmood. Over 25 years courtroom experience across family law, criminal defence, property litigation, tax appeals, and overseas legal advisory.",
        "telephone": "+923194959420",
        "email": "zubair_ramday@hotmail.com",
        "priceRange": "$$",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Room # 3-9 Basement, Saleemi Chambers, 15-Edward Road",
            "addressLocality": "Lahore",
            "addressRegion": "Punjab",
            "postalCode": "54000",
            "addressCountry": "PK"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "Y Block Main Market, Sector Y, DHA Phase 3",
            "addressLocality": "Lahore",
            "addressRegion": "Punjab",
            "postalCode": "54793",
            "addressCountry": "PK"
          }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "areaServed": [
          "Lahore",
          "Lahore High Court",
          "DHA Lahore",
          "Gulberg Lahore",
          "Johar Town",
          "Pakistan"
        ]
      },
      {
        "@type": "Attorney",
        "@id": "https://zubairlawfirm.com/#attorney-zubair",
        "name": "Zubair Mahmood",
        "jobTitle": "Founder & Senior Advocate High Court",
        "worksFor": {
          "@id": "https://zubairlawfirm.com/#organization"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Islamia University Bahawalpur (LLB)"
        },
        "memberOf": [
          {
            "@type": "Organization",
            "name": "Lahore High Court Bar Association"
          },
          {
            "@type": "Organization",
            "name": "Lahore Bar Association"
          },
          {
            "@type": "Organization",
            "name": "Punjab Bar Council"
          }
        ],
        "telephone": "+923004714001",
        "email": "zubair_ramday@hotmail.com"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

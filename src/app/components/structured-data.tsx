import { faqStructuredData } from "./blocks/faq";

const SITE_URL = "https://clksoftware.dev";

const organizationData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "CLK Software",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`,
      },
      description:
        "CLK Software builds, fixes, and scales custom web applications, ecommerce platforms, and APIs. Nearly two decades of senior-level experience without the overhead of a large agency.",
      areaServed: "US",
      serviceType: [
        "Custom Web Application Development",
        "Ecommerce Development",
        "API Development",
        "Web Application Rescue",
        "Technical Consulting",
      ],
      sameAs: ["https://github.com/clksoftworks"],
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@clksoftware.dev",
        telephone: "+13166657496",
        contactType: "customer service",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "CLK Software",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  );
}

import React from "react";
import { Helmet } from "react-helmet";
import "../styles/Industries.css";

const cardData = [
  {
    id: "card-bottling",
    title: "Bottling Industry",
    background: "/botling.webp",
    points: [
      "Liquid Flow Measurement",
      "Quality Control",
      "Production Efficiency",
      "Monitoring & Reporting",
      "Automation & Integration",
      "Energy & Resource Efficiency",
      "Batch Control",
    ],
  },
  {
    id: "card-distillation",
    title: "Distillation Plant",
    background: "/distilation-plant.webp",
    points: [
      "Feedstock Flow Measurement",
      "Product Separation & Control",
      "Quality Control",
      "Energy Efficiency Monitoring",
      "Process Optimization",
      "Monitoring & Reporting",
      "System Integration & Automation",
    ],
  },
  {
    id: "card-filtration",
    title: "Filtration System",
    background: "/fitaration-system.webp",
    points: [
      "Flow Rate Measurement",
      "Filter Efficiency Monitoring",
      "Pressure Drop Monitoring",
      "Maintenance & Troubleshooting",
      "Monitoring & Reporting",
      "Automation & Control",
    ],
  },
  {
    id: "card-pharma",
    title: "Pharmaceutical Plant",
    background: "/pharma-plant.webp",
    points: [
      "Raw Material Flow Measurement",
      "Process Control & Consistency",
      "Quality Control",
      "Energy Efficiency & Resource Management",
      "Regulatory Compliance & Reporting",
      "Automation & System Integration",
    ],
  },
  {
    id: "card-textile",
    title: "Textile Industry",
    background: "/textile-industry.webp",
    points: [
      "Water Flow Measurement",
      "Dye & Chemical Flow Control",
      "Quality Control",
      "Process Optimization",
      "Energy & Resource Efficiency",
      "Maintenance & Troubleshooting",
    ],
  },
  {
    id: "card-water-treatment",
    title: "Water Treatment",
    background: "/water-treatment.webp",
    points: [
      "Chemical Dosage Control",
      "Filtration & Treatment Monitoring",
      "Discharge & Effluent Monitoring",
      "Energy Efficiency & Optimization",
      "Quality Control & Compliance",
      "System Automation & Integration",
    ],
  },
];

const Industries = () => {
  // JSON-LD for ItemList of Industries
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": cardData.map((card, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: card.title,
        description: card.points.join(", "),
      },
    })),
  };

  return (
    <section
      id="industries-section"
      className="industries-section"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <Helmet>
        <title>Industries We Serve | Nuclus Control</title>

        {/* Basic Meta */}
        <meta
          name="description"
          content="Explore the diverse industries served by Nuclus Control, offering precision flow measurement and process optimization solutions."
        />
        <meta
          name="keywords"
          content="Bottling, Distillation, Filtration, Pharmaceutical, Textile, Water Treatment, Flow Measurement, Automation, Industry Solutions"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://digitalflowmeter.net/#industries-section"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Industries We Serve | Nuclus Control" />
        <meta
          property="og:description"
          content="Explore the diverse industries served by Nuclus Control, offering precision flow measurement and process optimization solutions."
        />
        <meta
          property="og:url"
          content="https://digitalflowmeter.net/#industries-section"
        />
        {/* If you have a representative image, include it here: */}
        {/* <meta property="og:image" content="https://digitalflowmeter.net/industries-banner.webp" /> */}

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
      </Helmet>

      {/* Section Header */}
      <header id="industries-overview">
        <h1 id="industries-heading" itemProp="name">
          Industries We Serve
        </h1>
        <p id="industries-description" itemProp="description">
          Discover the diverse range of industries we proudly serve, providing
          cutting-edge solutions tailored to enhance efficiency, productivity,
          and sustainability.
        </p>
        <p id="industries-additional-description">
          From precision manufacturing to water treatment and beyond, our
          innovative technologies are designed to meet the unique challenges of
          each sector, ensuring seamless integration and long-term success.
        </p>
      </header>

      {/* Cards Container */}
      <div className="scroll-container" id="industries-cards-wrapper">
        <div className="industries-cards-container" id="industries-cards">
          {cardData.map((card, index) => (
            <article
              key={card.id}
              className="industry-card"
              style={{ backgroundImage: `url('${card.background}')` }}
              id={card.id}
              aria-labelledby={`${card.id}-title`}
              tabIndex="0"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="industry-card-content">
                <h2 id={`${card.id}-title`} itemProp="name">
                  {card.title}
                </h2>
                <ul>
                  {card.points.map((point, idx) => (
                    <li key={idx} itemProp="serviceType">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Industries);

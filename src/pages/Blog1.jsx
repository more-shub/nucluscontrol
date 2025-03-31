import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/Blog1.css';

// JSON content stored as a constant
const content = {
  hero: {
    title: "How TDS Controllers Help in Maintaining Water Quality in Treatment Plants",
    description: "Looking for reliable TDS controllers for water treatment plants? We provide top-quality industrial TDS meters in Pune, Maharashtra, India. Contact us today!",
    image: "/distilationplantblog.webp"
  },
  toc: [
    { id: "introduction", text: "Introduction to TDS Controllers" },
    { id: "why-tds", text: "Why is TDS Control Important?" },
    { id: "factors", text: "Factors Affecting TDS Levels in Water" },
    { id: "showcasing", text: "Showcasing Our Top-Quality TDS Meters" },
    { id: "benefits", text: "Benefits of Using TDS Controllers" },
    { id: "faqs", text: "Frequently Asked Questions (FAQs)" },
    { id: "conclusion", text: "Conclusion" }
  ],
  sections: {
    introduction: {
      title: "Introduction to TDS Controllers in Water Treatment",
      paragraphs: [
        "Total Dissolved Solids (TDS) represent the amount of inorganic and organic substances dissolved in water, including minerals, salts, and metals. Controlling TDS levels is crucial for ensuring safe and high-quality water in treatment plants.",
        "A TDS controller is a specialized device that monitors and regulates TDS levels, ensuring that water remains safe for drinking, industrial, and wastewater applications."
      ]
    },
    "why-tds": {
      title: "Why is TDS Control Important?",
      list: [
        "Ensuring Safe Drinking Water: Excessive TDS can cause contamination, bad taste, and health risks. A TDS controller helps maintain water quality within safe limits.",
        "Preventing Scale and Corrosion: High TDS levels lead to mineral buildup in pipes, boilers, and industrial equipment, reducing efficiency and increasing maintenance costs.",
        "Improving RO System Performance: A TDS controller ensures that reverse osmosis (RO) systems work efficiently by monitoring and regulating dissolved solids.",
        "Compliance with Water Quality Standards: Water treatment plants must meet BIS, ISO, and WHO standards for water safety, and TDS controllers help ensure compliance."
      ]
    },
    factors: {
      title: "Factors Affecting TDS Levels in Water",
      list: [
        "Source of Water: The TDS level varies based on the source—groundwater has higher TDS due to dissolved minerals, while rainwater has lower TDS.",
        "Industrial and Agricultural Runoff: Factories and farms contribute to increased TDS levels through chemical discharges, fertilizers, and wastewater disposal.",
        "Water Treatment Processes: Filtration systems like RO, distillation, and ion exchange impact TDS levels by removing or adding dissolved solids.",
        "Seasonal Changes: During the monsoon season, TDS levels may fluctuate due to increased surface runoff and mixing of different water sources."
      ]
    },
    showcasing: {
      title: "Showcasing Our Top-Quality TDS Meters",
      description: "We offer high-quality TDS controllers in Pune, Maharashtra, India, designed for precision and durability.",
      product: {
        image: "/c181.webp",
        name: "TDS Meter Model 1"
      },
      contact: "Contact us today for the best TDS meters for your water treatment plant!"
    },
    benefits: {
      title: "Benefits of Using TDS Controllers",
      list: [
        "Improved Water Quality – Ensures clean and purified water.",
        "Cost Savings – Prevents equipment damage and reduces maintenance costs.",
        "Energy Efficiency – Optimizes water purification for minimal energy use.",
        "Automation & Remote Monitoring – Many models allow real-time monitoring."
      ]
    },
    faqs: {
      title: "Frequently Asked Questions (FAQs)",
      items: [
        {
          question: "1. What is the ideal TDS level for drinking water?",
          answer: "The Bureau of Indian Standards (BIS) recommends TDS levels below 500 mg/L for safe drinking water."
        },
        {
          question: "2. Can a TDS controller remove dissolved solids?",
          answer: "No, a TDS controller measures and regulates TDS levels. Filtration systems like RO filters are needed to remove excess TDS."
        },
        {
          question: "3. Where can I buy industrial TDS controllers in Pune, Maharashtra?",
          answer: "We offer high-quality TDS meters in Pune. Contact us today for more details!"
        }
      ]
    },
    conclusion: {
      title: "Conclusion",
      paragraphs: [
        "TDS controllers play a crucial role in water treatment plants, industries, and municipal water systems by ensuring safe, clean, and efficient water purification.",
        "If you need top-quality TDS controllers in Pune, Maharashtra, India, we provide reliable industrial TDS meters.",
        "Contact us today for the best solutions!"
      ]
    }
  },
  footer: "&copy; 2025 TDS Controllers. All Rights Reserved."
};

// FAQ Item component with toggle functionality
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAnswer = () => setIsOpen(!isOpen);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleAnswer}>
        <h3>{question}</h3>
        <span className="faq-toggle">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Blog1 = () => {
  const { hero, toc, sections } = content;
  return (
    <div className="blog1-container">
      <Helmet>
        <title>{hero.title} | NUCLUS CONTROL</title>
        <meta name="description" content={hero.description} />
      </Helmet>
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{hero.title}</h1>
            <p className="hero-description">{hero.description}</p>
          </div>
          <div className="hero-image">
            <img src={hero.image} alt="Blog Hero" />
          </div>
        </div>
      </header>

      <div className="blog1-body">
        {/* Table of Contents (Sidebar) */}
        <aside className="table-of-contents">
          <h2>Table of Contents</h2>
          <ul>
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.text}</a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="content">
          {/* Introduction Section */}
          <section id="introduction" className="section">
            <h2>{sections.introduction.title}</h2>
            {sections.introduction.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </section>

          {/* Why TDS Control Important */}
          <section id="why-tds" className="section">
            <h2>{sections["why-tds"].title}</h2>
            <ol>
              {sections["why-tds"].list.map((item, idx) => {
                const parts = item.split(':');
                return (
                  <li key={idx}>
                    <strong className="highlight">{parts[0]}:</strong> {parts.slice(1).join(':')}
                  </li>
                );
              })}
            </ol>
          </section>

          {/* Factors Affecting TDS Levels */}
          <section id="factors" className="section">
            <h2>{sections.factors.title}</h2>
            <ol>
              {sections.factors.list.map((item, idx) => {
                const parts = item.split(':');
                return (
                  <li key={idx}>
                    <strong className="highlight">{parts[0]}:</strong> {parts.slice(1).join(':')}
                  </li>
                );
              })}
            </ol>
          </section>

          {/* Showcasing Our TDS Meters */}
          <section id="showcasing" className="section">
            <h2>{sections.showcasing.title}</h2>
            <p>
              <strong>{sections.showcasing.description}</strong>
            </p>
            <div className="product-images">
              <div className="product-card">
                <img src={sections.showcasing.product.image} alt="TDS Meter" />
                <p>{sections.showcasing.product.name}</p>
              </div>
            </div>
            <p>
              <strong>{sections.showcasing.contact}</strong>
            </p>
          </section>

          {/* Benefits */}
          <section id="benefits" className="section">
            <h2>{sections.benefits.title}</h2>
            <ul className="benefits-list">
              {sections.benefits.list.map((item, idx) => {
                const parts = item.split('–');
                return (
                  <li key={idx}>
                    <strong className="highlight">{parts[0]}–</strong> {parts[1]}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* FAQs */}
          <section id="faqs" className="section">
            <h2>{sections.faqs.title}</h2>
            {sections.faqs.items.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="section">
            <h2>{sections.conclusion.title}</h2>
            {sections.conclusion.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Blog1;

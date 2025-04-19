import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../styles/Blog1.css';

const content3 = {
  hero: {
    title: "How Battery Operated Flow Meters Improve Water Flow Measurement in Industrial Plants",
    description:
      "Discover how Battery Operated Flow Meters help industrial plants overcome power dependency, inaccurate readings, and high maintenance costs. Learn how Nuclus Control’s flow meters offer a reliable, cost-effective solution.",
    image: "/industryh.webp" // Update with the correct image path
  },
  toc: [
    { id: "introduction", text: "Introduction" },
    { id: "challenges", text: "Common Challenges" },
    { id: "solution", text: "How They Solve Challenges" },
    { id: "benefits", text: "Key Benefits" },
    { id: "industries", text: "Industries Benefiting" },
    { id: "products", text: "Our Products" },
    { id: "faqs", text: "FAQs" },
    { id: "conclusion", text: "Conclusion" }
  ],
  sections: {
    introduction: {
      title: "Introduction",
      paragraphs: [
        "Accurate water flow measurement is essential in industrial plants for efficient resource management, regulatory compliance, and cost reduction. However, many industries struggle with unreliable flow meters due to power dependency, high maintenance costs, and complex installations.",
        "Battery Operated Flow Meters provide a cost-effective, independent, and low-maintenance solution for these challenges. This article explores common issues in industrial water flow measurement and how Nuclus Control’s Battery Operated Flow Meters help overcome them."
      ]
    },
    challenges: {
      title: "Common Challenges in Industrial Water Flow Measurement",
      list: [
        "Power Dependency and Unstable Supply – Frequent power fluctuations lead to data inconsistencies and downtime in conventional flow meters.",
        "High Maintenance Costs – Traditional flow meters require regular calibration and servicing, resulting in increased operational expenses.",
        "Difficulty in Remote Installations – Hard-to-reach pipeline locations with limited power make conventional installations challenging.",
        "Inaccurate Water Usage Data – Without precise measurement, monitoring water consumption and detecting leaks become problematic, leading to wastage."
      ]
    },
    solution: {
      title: "How Battery Operated Flow Meters Solve These Challenges",
      list: [
        "Independent Power Supply – Operates on 2 x 1.5VDC Duracell batteries, eliminating the need for external power and ensuring uninterrupted flow measurement.",
        "Accurate & Real-Time Monitoring – Provides an accuracy of ±2.5% with a 7-digit numeric LCD display for easy real-time monitoring.",
        "Easy Installation – Compact, weatherproof IP65 design enables installation in remote and harsh environments.",
        "Low Maintenance – Minimal upkeep compared to electromagnetic or ultrasonic meters, ensuring long operational life."
      ]
    },
    benefits: {
      title: "Key Benefits of Battery Operated Flow Meters",
      list: [
        "✅ 30% Reduction in Water Wastage – Precise data helps identify leaks and optimize usage.",
        "✅ 40% Savings on Maintenance Costs – Durable design reduces servicing needs.",
        "✅ Enhanced Regulatory Compliance – Accurate reporting for pollution control norms.",
        "✅ Improved Operational Efficiency – Reliable monitoring without power dependency.",
        "✅ Modular & Flexible Installation – Can be mounted in various orientations with a 360° rotating display."
      ]
    },
    industries: {
      title: "Industries That Benefit from Battery Operated Flow Meters",
      list: [
        "Chemical & Pharmaceutical Plants – Track process water usage and wastewater discharge.",
        "Food & Beverage Manufacturing – Ensure accurate water measurement in production processes.",
        "Textile & Paper Mills – Optimize water consumption for sustainable operations.",
        "Effluent Treatment Plants (ETP) – Monitor treated and discharged water efficiently.",
        "Cooling & Boiler Systems – Maintain precise water flow for energy efficiency."
      ]
    },
    products: {
      title: "Our Products",
      paragraphs: [
        "Check out our high-quality Battery Operated Flow Meters designed for industrial applications."
      ],
      product: {
        image: "/flowreader0.webp", // Update with your product image
        link: "/products/BAT-001",  // Redirects to the BAT-001 route
        text: "View Our Battery Operated Flow Meters"
      }
    },
    faqs: {
      title: "Frequently Asked Questions (FAQs)",
      items: [
        {
          question: "1. How do Battery Operated Flow Meters work?",
          answer: "They measure water flow using sensors and a digital display, operating independently on battery power, thus eliminating the need for external electricity."
        },
        {
          question: "2. Are they accurate?",
          answer: "Yes, Nuclus Control’s Battery Operated Flow Meters offer an accuracy of ±2.5%, making them reliable for industrial applications."
        },
        {
          question: "3. Can they be installed in remote locations?",
          answer: "Absolutely, their compact and weatherproof design makes them ideal for remote installations."
        },
        {
          question: "4. What is the battery life?",
          answer: "They use 2 x 1.5VDC Duracell batteries and offer long operational life with minimal maintenance."
        },
        {
          question: "5. Which industries benefit from these flow meters?",
          answer: "Industries like chemical processing, pharmaceuticals, food & beverage, paper mills, and ETPs benefit greatly from these meters."
        }
      ]
    },
    conclusion: {
      title: "Conclusion",
      paragraphs: [
        "Battery Operated Flow Meters provide a reliable, cost-effective, and maintenance-free solution for industrial water flow measurement. Their independent power supply, accurate monitoring, and easy installation make them ideal for optimizing water usage and reducing operational costs.",
        "If your industrial plant faces challenges in flow measurement, Nuclus Control offers high-performance Battery Operated Flow Meters designed for efficiency and durability.",
        "Contact us today to transform your water management system!"
      ]
    }
  },
  footer: "&copy; 2025 Nuclus Control. All Rights Reserved."
};

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

const Blog3 = () => {
  const { hero, toc, sections } = content3;
  return (
    <div className="blog1-container">
      <Helmet>
        <title>{hero.title} | Nuclus Control</title>
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
        {/* Table of Contents */}
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

        {/* Main Content */}
        <main className="content">
          {/* Introduction */}
          <section id="introduction" className="section">
            <h2>{sections.introduction.title}</h2>
            {sections.introduction.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </section>

          {/* Common Challenges */}
          <section id="challenges" className="section">
            <h2>{sections.challenges.title}</h2>
            <ul>
              {sections.challenges.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {/* How They Solve Challenges */}
          <section id="solution" className="section">
            <h2>{sections.solution.title}</h2>
            <ul>
              {sections.solution.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Key Benefits */}
          <section id="benefits" className="section">
            <h2>{sections.benefits.title}</h2>
            <ul>
              {sections.benefits.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Industries Benefiting */}
          <section id="industries" className="section">
            <h2>{sections.industries.title}</h2>
            <ul>
              {sections.industries.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Our Products Section (Product Display Placeholder) */}
          {sections.products && (
            <section id="products" className="section">
              <h2>{sections.products.title}</h2>
              {sections.products.paragraphs &&
                sections.products.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              {sections.products.product && (
                <div className="product-images">
                  <div className="product-card">
                    <Link to={sections.products.product.link}>
                      <img src={sections.products.product.image} alt="Battery Operated Flow Meter" />
                      <p>{sections.products.product.text}</p>
                    </Link>
                  </div>
                </div>
              )}
            </section>
          )}

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

export default Blog3;

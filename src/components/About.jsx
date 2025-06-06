import React from "react";
import { Helmet } from "react-helmet";
import "../styles/About.css";

const domain = "https://digitalflowmeter.net";

const featuresData = [
  { icon: "📏", text: "Reliable and accurate instruments" },
  { icon: "✅", text: "Quality tested instruments" },
  { icon: "🏭", text: "State-of-the-art facilities" },
  { icon: "⏳", text: "Timely delivery" },
  { icon: "💳", text: "Easy payment modes" },
  { icon: "⚖️", text: "Ethical business practices" },
];

const statsData = [
  { value: "5000+", label: "Customers" },
  { value: "50k+", label: "Orders Completed" },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Nuclus Control</title>
        <meta
          name="description"
          content="Learn about Nuclus Control's journey since 2009 in delivering precision-engineered flow control instruments. Trusted by 5000+ customers worldwide."
        />
        <meta
          name="keywords"
          content="Nuclus Control, About Nuclus, Flow Instruments Company, Pune Manufacturer, Process Control Solutions"
        />
        <meta name="author" content="Nuclus Control" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="About Us | Nuclus Control" />
        <meta
          property="og:description"
          content="Explore Nuclus Control’s legacy in high-quality flow and process control instruments. Experience precision, innovation, and trust."
        />
        <meta
          property="og:image"
          content={`${domain}/office.webp`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${domain}/#about-section`}
        />

        {/* Canonical & Favicon */}
        <link
          rel="canonical"
          href={`${domain}/#about-section`}
        />
        <link
          rel="icon"
          type="image/webp"
          href={`${domain}/favicon.webp`}
        />

        {/* JSON-LD for this WebPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About Us | Nuclus Control",
            url: `${domain}/#about-section`,
            description:
              "Learn about Nuclus Control’s journey since 2009 in delivering precision-engineered flow control instruments.",
            inLanguage: "en",
          })}
        </script>
      </Helmet>

      <section
        id="about-section"
        className="about"
        aria-labelledby="about-heading"
      >
        <div className="about-container">
          <header className="about-header">
            <h1 id="about-heading">Nuclus Control</h1>
            <p>Building excellence since 2009</p>
          </header>

          <div className="about-history">
            <div className="history-text">
              <h2>Our Journey</h2>
              <p>
                At Nuclus Control, we are committed to redefining precision in
                the controlling and measuring instrument industry. Based in
                Pune, Maharashtra, we specialize in manufacturing, exporting,
                and supplying high-quality instruments that combine
                technological innovation with practical efficiency.
              </p>
              <h3>Precision in Every Product</h3>
              <p>
                What started as a humble initiative has grown into a trusted
                brand offering Digital Flow Meters, Digiflow Controllers,
                Transmitters, Indicators, and Conductivity/TDS Meters. Our
                products are designed for durability, accuracy, and energy
                efficiency—ensuring reliability in every application.
              </p>
              <h3>Innovation for the Future</h3>
              <p>
                Driven by a passion for excellence, we continuously invest in
                innovation and advancement to enhance our product performance.
                With a foundation built on integrity and expertise, we remain
                dedicated to delivering world-class solutions that empower
                industries worldwide.
              </p>
            </div>
            <div className="history-image">
              <img
                src={`${domain}/office.webp`}
                alt="Nuclus Control office building"
                loading="lazy"
              />
            </div>
          </div>

          <div className="about-features">
            <h2>What Sets Us Apart</h2>
            <div className="features">
              {featuresData.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span
                    className="icon"
                    role="img"
                    aria-label={
                      feature.text === "Reliable and accurate instruments"
                        ? "Ruler icon"
                        : feature.text === "Quality tested instruments"
                        ? "Checkmark icon"
                        : feature.text === "State-of-the-art facilities"
                        ? "Factory icon"
                        : feature.text === "Timely delivery"
                        ? "Hourglass icon"
                        : feature.text === "Easy payment modes"
                        ? "Credit card icon"
                        : "Scale icon"
                    }
                  >
                    {feature.icon}
                  </span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats">
            {statsData.map((stat, index) => (
              <div key={index} className="stat">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(About);

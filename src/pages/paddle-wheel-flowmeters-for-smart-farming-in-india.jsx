import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../styles/Blog1.css';

const content2 = {
  hero: {
    title: "Paddle Wheel Flowmeters for Smart Farming in India",
    description:
      "Discover how paddle wheel flowmeters enhance smart farming in India with RS485 communication & automated relay control. Learn how they improve irrigation efficiency, fertigation, and groundwater monitoring for sustainable agriculture.",
    image: "/smartfarming.webp" // Replace with your hero image path
  },
  toc: [
    { id: "introduction", text: "Introduction" },
    { id: "what-is", text: "What is a Paddle Wheel Flowmeter?" },
    { id: "applications", text: "Applications in Agriculture" },
    { id: "advantages", text: "Advantages for Smart Farming" },
    { id: "iot", text: "IoT Integration for Smart Farming" },
    { id: "conclusion", text: "Conclusion" }
  ],
  sections: {
    introduction: {
      title: "Introduction",
      paragraphs: [
        "Efficient water management is crucial for Indian agriculture, where over 80% of freshwater is used for irrigation. With the increasing adoption of smart farming solutions, paddle wheel flowmeters have become a preferred choice for accurate water measurement, reducing wastage, and optimizing irrigation systems.",
        "By integrating IoT-based automation, farmers can now monitor water flow remotely using automated relay control and RS485 communication, ensuring higher crop yields and sustainable farming.",
        "This blog explores how paddle wheel flowmeters work, their applications in agriculture, and how they enable IoT-based smart farming in India."
      ]
    },
    "what-is": {
      title: "What is a Paddle Wheel Flowmeter?",
      paragraphs: [
        "A paddle wheel flowmeter is a mechanical flow sensor used to measure the flow rate of liquids in irrigation and fertigation systems. It works on the principle that the paddle wheel (rotor) rotates as water flows through the pipe, while a sensor unit detects the speed of rotation and an electronic module converts these rotations into a measurable flow rate (such as LPM or GPM)."
      ],
      list: [
        "✔️ Paddle wheel (rotor): Rotates as water flows through the pipe",
        "✔️ Sensor unit: Detects the speed of rotation",
        "✔️ Electronic module: Converts rotations into flow rate (LPM, GPM, etc.)"
      ],
      subSection: {
        title: "Key Features for Smart Agriculture:",
        list: [
          "RS485 Communication: Enables long-distance, real-time data transmission",
          "Automated Relay Control: Allows direct pump/valve automation based on flow rate",
          "Compact & Durable: Designed for rough agricultural conditions",
          "Embedded Display & Integration: Compatible with LCD, LED displays for real-time data visualization"
        ]
      },
      product: {
        image: "/p383sstriclore.webp", 
        link: "/products/P383-SS",  
        text: "View Our Paddle Wheel Flowmeter"
      }
    },
    applications: {
      title: "Applications of Paddle Wheel Flowmeters in Agriculture",
      list: [
        "Drip & Sprinkler Irrigation Systems – Ensures accurate water distribution to crops, enables automated relay activation to control pumps/valves, helps in real-time flow monitoring via RS485 connectivity, and can be embedded with LCD displays to show flow data locally.",
        "Precision Farming & IoT-Based Smart Irrigation – Works with sensor-based irrigation systems for real-time flow control and supports automated relay switching to prevent over-irrigation.",
        "Fertigation & Pesticide Application – Ensures precise mixing and flow control of fertilizers/pesticides, prevents overuse or underuse to improve crop health and yield, and can trigger automated dosing pumps based on flow rates.",
        "Borewell & Groundwater Monitoring – Helps track borewell water extraction for sustainable use, sends alerts when water levels drop beyond a threshold, and enables RS485-based remote monitoring for water conservation."
      ]
    },
    advantages: {
      title: "Advantages of Paddle Wheel Flowmeters for Smart Farming",
      list: [
        "✅ Accurate Flow Measurement – Ensures precise irrigation control",
        "✅ Cost-Effective – Affordable compared to ultrasonic or electromagnetic flowmeters",
        "✅ Easy Installation & Maintenance – Simple design with minimal upkeep",
        "✅ RS485 Connectivity – Long-distance data transmission without signal loss",
        "✅ Automated Relay Control – Enables direct automation of water pumps & valves",
        "✅ Embedded Display Support – Allows real-time flow rate visualization on LED screens",
        "✅ Reduces Water Wastage – Supports sustainable and efficient irrigation"
      ]
    },
    iot: {
      title: "How Paddle Wheel Flowmeters Enable IoT-Based Smart Farming in India",
      paragraphs: [
        "By integrating paddle wheel flowmeters with IoT-based automation, farmers can achieve remote water management and precision farming."
      ],
      list: [
        "🔹 RS485 Communication: Seamless data transmission to IoT gateways, PLCs, or automation systems",
        "🔹 Automated Relay Switching: Enables automatic pump/valve activation based on water flow levels",
        "🔹 Real-Time Flow Monitoring: Helps farmers control irrigation efficiently and reduce manual intervention",
        "🔹 Embedded Display Integration: Supports OLED, TFT, and LCD screens for on-site data visualization"
      ],
      subSection: {
        title: "Example Use Case:",
        paragraphs: [
          "A farmer uses a paddle wheel flowmeter with RS485 output to monitor water usage. The data is sent to a PLC-based controller, which triggers an automated relay to stop the pump when optimal irrigation is achieved. The system is embedded with an OLED display to show real-time flow rates and alerts, ensuring efficient water usage."
        ]
      }
    },
    conclusion: {
      title: "Conclusion",
      paragraphs: [
        "Paddle wheel flowmeters play a key role in modern agriculture, helping Indian farmers monitor, control, and optimize water usage. With RS485-based communication, automated relay control, and embedded display integration, these flowmeters are now an essential part of IoT-based smart irrigation systems.",
        "If you’re looking for a reliable paddle wheel flowmeter manufacturer in India, [Your Company Name] offers high-quality, industrial-grade flowmeters designed for agricultural automation and smart farming applications.",
        "📞 Contact us today to explore our IoT-enabled water management solutions! 🚀"
      ]
    }
  },
  footer: "&copy; 2025 Your Company Name. All Rights Reserved."
};

const Blog2 = () => {
  const { hero, toc, sections } = content2;
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
          {/* Iterate over each section */}
          {Object.entries(sections).map(([sectionId, sectionData]) => (
            <section key={sectionId} id={sectionId} className="section">
              <h2>{sectionData.title}</h2>
              {sectionData.paragraphs &&
                sectionData.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              {sectionData.list && (
                // For "applications", using an ordered list; otherwise, an unordered list
                sectionId === "applications" ? (
                  <ol>
                    {sectionData.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ul>
                    {sectionData.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )
              )}
              {sectionData.subSection && (
                <>
                  <h3>{sectionData.subSection.title}</h3>
                  {sectionData.subSection.paragraphs &&
                    sectionData.subSection.paragraphs.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  {sectionData.subSection.list && (
                    <ul>
                      {sectionData.subSection.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}
              {sectionData.product && (
                <div className="product-images">
                  <div className="product-card">
                    <Link to={sectionData.product.link}>
                      <img src={sectionData.product.image} alt="Paddle Wheel Flowmeter" />
                      <p>{sectionData.product.text}</p>
                    </Link>
                  </div>
                </div>
              )}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Blog2;

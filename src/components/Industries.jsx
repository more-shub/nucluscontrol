import React from "react";
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
      "Maintenance & Troubleshooting",
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
      "Monitoring & Reporting",
      "System Integration & Automation",
      "Maintenance & Troubleshooting",
    ],
  },
  {
    id: "card-water-treatment",
    title: "Water Treatment",
    background: "/water-treatment.webp",
    points: [
      "Raw Water Flow Measurement",
      "Chemical Dosage Control",
      "Filtration & Treatment Monitoring",
      "Discharge & Effluent Monitoring",
      "Energy Efficiency & Optimization",
      "Quality Control & Compliance",
      "Monitoring & Reporting",
      "System Automation & Integration",
    ],
  },
];

const Industries = () => {
  return (
    <div id="industries-section">
      <div className="industries-section" id="industries-overview">
        <h1 id="industries-heading">Industries We Serve</h1>
        <p id="industries-description">
          Discover the diverse range of industries we proudly serve, providing
          cutting-edge solutions tailored to enhance efficiency, productivity,
          and sustainability.
        </p>
        <p id="industries-additional-description">
          From precision manufacturing to water treatment and beyond, our
          innovative technologies are designed to meet the unique challenges of
          each sector, ensuring seamless integration and long-term success.
        </p>
      </div>

      <div className="scroll-container" id="industries-cards-wrapper">
        <div className="industries-cards-container" id="industries-cards">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="industry-card"
              style={{ backgroundImage: `url('${card.background}')` }}
              id={card.id}
            >
              <div className="industry-card-content">
                <h3>{card.title}</h3>
                <p>
                  {card.points.map((point, index) => (
                    <React.Fragment key={index}>
                      {point}
                      {index < card.points.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Industries);

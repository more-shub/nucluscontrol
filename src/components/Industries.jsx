import React from 'react';
import '../styles/Industries.css';

const Industries = () => {
  return (
    <div id="industries-section">
      <div className="industries-section" id="industries-overview">
        <h1 id="industries-heading">Industries We Serve</h1>
        <p id="industries-description">
          Discover the diverse range of industries we proudly serve, providing cutting-edge solutions tailored to enhance efficiency, productivity, and sustainability.
        </p>
        <p id="industries-additional-description">
          From precision manufacturing to water treatment and beyond, our innovative technologies are designed to meet the unique challenges of each sector, ensuring seamless integration and long-term success.
        </p>
      </div>

      <div className="scroll-container" id="industries-cards-wrapper">
        <div className="industries-cards-container" id="industries-cards">
          {/* Card 1 */}
          <div
            className="industry-card"
            style={{ backgroundImage: "url('/botling.webp')" }}
            id="card-bottling"
          >
            <div className="industry-card-content">
              <h3>Bottling Industry</h3>
              <p>
                Liquid Flow Measurement<br />
                Quality Control<br />
                Production Efficiency<br />
                Monitoring & Reporting<br />
                Automation & Integration<br />
                Maintenance & Troubleshooting<br />
                Energy & Resource Efficiency<br />
                Batch Control
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="industry-card"
            style={{ backgroundImage: "url('/distilation-plant.webp')" }}
            id="card-distillation"
          >
            <div className="industry-card-content">
              <h3>Distillation Plant</h3>
              <p>
                Feedstock Flow Measurement<br />
                Product Separation & Control<br />
                Quality Control<br />
                Energy Efficiency Monitoring<br />
                Process Optimization<br />
                Monitoring & Reporting<br />
                System Integration & Automation
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className="industry-card"
            style={{ backgroundImage: "url('/fitaration-system.webp')" }}
            id="card-filtration"
          >
            <div className="industry-card-content">
              <h3>Filtration System</h3>
              <p>
                Flow Rate Measurement<br />
                Filter Efficiency Monitoring<br />
                Pressure Drop Monitoring<br />
                Maintenance & Troubleshooting<br />
                Monitoring & Reporting<br />
                Automation & Control
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div
            className="industry-card"
            style={{ backgroundImage: "url('/pharma-plant.webp')" }}
            id="card-pharma"
          >
            <div className="industry-card-content">
              <h3>Pharmaceutical Plant</h3>
              <p>
                Raw Material Flow Measurement<br />
                Process Control & Consistency<br />
                Quality Control<br />
                Energy Efficiency & Resource Management<br />
                Regulatory Compliance & Reporting<br />
                Automation & System Integration<br />
              </p>
            </div>
          </div>
          {/* Card 5 */}
          <div
            className="industry-card"
            style={{ backgroundImage: "url('/textile-industry.webp')" }}
            id="card-textile"
          >
            <div className="industry-card-content">
              <h3>Textile Industry</h3>
              <p>
                Water Flow Measurement<br />
                Dye & Chemical Flow Control<br />
                Quality Control<br />
                Process Optimization<br />
                Energy & Resource Efficiency<br />
                Monitoring & Reporting<br />
                System Integration & Automation<br />
                Maintenance & Troubleshooting
              </p>
            </div>
          </div>
          {/* Card 6 */}
          <div
            className="industry-card"
            style={{ backgroundImage: "url('/water-treatment.webp')" }}
            id="card-water-treatment"
          >
            <div className="industry-card-content">
              <h3>Water Treatment</h3>
              <p>
                Raw Water Flow Measurement<br />
                Chemical Dosage Control<br />
                Filtration & Treatment Monitoring<br />
                Discharge & Effluent Monitoring<br />
                Energy Efficiency & Optimization<br />
                Quality Control & Compliance<br />
                Monitoring & Reporting<br />
                System Automation & Integration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;

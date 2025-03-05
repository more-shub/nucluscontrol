import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  // URL obtained from deploying your Google Apps Script
  const GOOGLE_FORM_URL =
    "https://script.google.com/macros/s/AKfycbz6TH8jEYfbwNKtlWDGfFRUY0OO8NL5QPAOlPXI9e9FXe5EDtWoOadPpWHheW93ypA5mA/exec";

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    contact: "",
    company: "",
    address: "",
    selectProduct: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Updated fields array to include "selectProduct"
  const fields = [
    "email",
    "name",
    "contact",
    "company",
    "address",
    "selectProduct",
  ];

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, [fields[step]]: value }));
  };

  const validateField = () => {
    const currentValue = formData[fields[step]].trim();

    if (step === 0 && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(currentValue)) {
      return "Please enter a valid email address.";
    }
    if (step === 1 && !currentValue) return "Name cannot be empty.";
    if (
      step === 2 &&
      (!/^\d+$/.test(currentValue) || currentValue.length < 7)
    ) {
      return "Please enter a valid contact number (min 7 digits).";
    }
    if (step === 3 && !currentValue) return "Company Name cannot be empty.";
    if (step === 4 && !currentValue) return "Address cannot be empty.";
    if (step === 5 && !currentValue) return "Please select a product.";
    return "";
  };

  const handleNext = async () => {
    const validationError = validateField();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");

    if (step < fields.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      setIsLoading(true);
      try {
        // Using no-cors means the response is opaque and cannot be parsed.
        await fetch(GOOGLE_FORM_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          mode: "no-cors",
        });
        // Since we're in no-cors mode, assume submission is successful if no error is thrown.
        setSubmitted(true);
      } catch (err) {
        setError(
          err.message ||
            "There was an error submitting the form. Please try again."
        );
        console.error("Submission Error:", err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Updated placeholders and labels to include the new field.
  const placeholders = [
    "Enter your Email",
    "Enter your Name",
    "Enter your Contact Number",
    "Enter your Company Name",
    "Enter Detailed Address",
    "Select a Product",
  ];

  const labels = [
    "Email Address",
    "Full Name",
    "Contact Number",
    "Company Name",
    "Address",
    "Select Product",
  ];

  if (submitted) {
    return (
      <div className="contact-form-container">
        <div className="contact-form-box thank-you">
          <h2>Thank You!</h2>
          <p>Your details have been submitted successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div id="contact" className="contact-form-container">
      <div className="contact-form-box">
        <h2>Contact Us</h2>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${((step + 1) / fields.length) * 100}%` }}
          ></div>
        </div>
        <label htmlFor="contactField">{labels[step]}</label>
        {fields[step] === "selectProduct" ? (
          <select
            id="contactField"
            value={formData[fields[step]]}
            onChange={handleChange}
          >
            <option value="">Select a Product</option>
            <option value="Digital Flow Meter">Digital Flow Meter</option>
            <option value="Flow Sensor">Flow Sensor</option>
            <option value="Battery operated flow meter">
              Battery operated flow meter
            </option>
            <option value="pH Meter">pH Meter</option>
            <option value="Conductivity /TDS Meter">
              Conductivity /TDS Meter
            </option>
          </select>
        ) : (
          <input
            id="contactField"
            type={step === 0 ? "email" : step === 2 ? "tel" : "text"}
            placeholder={placeholders[step]}
            value={formData[fields[step]]}
            onChange={handleChange}
            autoComplete="off"
          />
        )}
        {error && <div className="contact-form-error">{error}</div>}
        <button onClick={handleNext} disabled={isLoading}>
          {step < fields.length - 1
            ? "Next"
            : isLoading
            ? "Submitting..."
            : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Contact;

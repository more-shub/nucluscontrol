import React, { useState, useCallback, useMemo } from "react";
import "../styles/Contact.css";

const Contact = () => {
  // URL obtained from deploying your Google Apps Script
  const GOOGLE_FORM_URL =
    "https://script.google.com/macros/s/AKfycbw1_Qmk9e4eGHacoXSO7Uo731gleKMFBgfP6o7UBpTNcWCCtOepC5xo5ckXza-dcGyP1g/exec";

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    "Email Address": "",
    "Full Name": "",
    "Contact Number": "",
    "Company Name": "",
    "Describe your Requirement": "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Memoize arrays so that they do not change on every render.
  const fields = useMemo(
    () => [
      "Email Address",
      "Full Name",
      "Contact Number",
      "Company Name",
      "Describe your Requirement",
    ],
    []
  );

  const placeholders = useMemo(
    () => [
      "Enter your Email Address",
      "Enter your Full Name",
      "Enter your Contact Number",
      "Enter your Company Name",
      "Describe your Requirement",
    ],
    []
  );

  const labels = useMemo(
    () => [
      "Email Address",
      "Full Name",
      "Contact Number",
      "Company Name",
      "Describe your Requirement",
    ],
    []
  );

  // Handle input change with useCallback to prevent unnecessary re-renders.
  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      setFormData((prev) => ({ ...prev, [fields[step]]: value }));
    },
    [fields, step]
  );

  // Validate the current field based on the step.
  const validateField = useCallback(() => {
    const currentValue = formData[fields[step]].trim();

    if (step === 0 && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(currentValue)) {
      return "Please enter a valid email address.";
    }
    if (step === 1 && !currentValue) return "Full Name cannot be empty.";
    if (
      step === 2 &&
      (!/^\d+$/.test(currentValue) || currentValue.length < 7)
    ) {
      return "Please enter a valid contact number (min 7 digits).";
    }
    if (step === 3 && !currentValue) return "Company Name cannot be empty.";
    if (step === 4 && !currentValue) return "Please describe your requirement.";
    return "";
  }, [formData, fields, step]);

  // Handle the "Next" or "Submit" button click.
  const handleNext = useCallback(async () => {
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
  }, [validateField, fields.length, formData, GOOGLE_FORM_URL, step]);

  // Handle Enter key press on the input field for keyboard accessibility.
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleNext();
      }
    },
    [handleNext]
  );

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
        <input
          id="contactField"
          type={step === 0 ? "email" : step === 2 ? "tel" : "text"}
          placeholder={placeholders[step]}
          value={formData[fields[step]]}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoFocus
        />
        {error && (
          <div className="contact-form-error" role="alert">
            {error}
          </div>
        )}
        <button onClick={handleNext} disabled={isLoading} aria-busy={isLoading}>
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

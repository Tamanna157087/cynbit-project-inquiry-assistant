import { useState } from "react";
import axios from "axios";
import {
  Globe,
  Smartphone,
  Brain,
  Layers,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import "./App.css";

// Live Render backend URL
const API_URL = "https://cynbit-inquiry-backend.onrender.com";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1: Project details
  const [projectType, setProjectType] = useState("");
  const [description, setDescription] = useState("");

  // Step 2: Project planning
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  // Step 3: Contact details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  // Submission states
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const projectOptions = [
    { name: "Website", icon: Globe },
    { name: "Mobile App", icon: Smartphone },
    { name: "AI Solution", icon: Brain },
    { name: "SaaS Platform", icon: Layers },
  ];

  function handleContinue() {
    if (currentStep === 1) {
      if (!projectType) {
        alert("Please select a project type.");
        return;
      }

      if (!description.trim()) {
        alert("Please describe your project.");
        return;
      }

      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!budget || !timeline) {
        alert("Please select your budget and timeline.");
        return;
      }

      setCurrentStep(3);
    }
  }

  function handleBack() {
    setCurrentStep((previousStep) => previousStep - 1);
  }

  async function handleSubmit() {
    if (isSubmitting) return;

    if (!name.trim() || !email.trim()) {
      setErrorMessage("Please enter your name and email.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const projectData = {
      projectType,
      description: description.trim(),
      budget,
      timeline,
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
    };

    try {
      setIsSubmitting(true);
      setErrorMessage("");

      const response = await axios.post(
        `${API_URL}/api/inquiries`,
        projectData,
      );

      console.log("Inquiry submitted:", response.data);

      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);

      setErrorMessage(
        error.response?.data?.message ||
          "Unable to submit your inquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="page">
      <nav className="navbar">
        <h2>
          CYNBIT<span>.</span>
        </h2>

        <a href="https://www.cynbit.in/" target="_blank" rel="noreferrer">
          Visit Cynbit
        </a>
      </nav>

      <main className="container">
        <div className="form-card">
          {!submitted ? (
            <>
              <p className="eyebrow">LET'S BUILD SOMETHING GREAT</p>

              <h1>Tell us about your project</h1>

              <p className="subtitle">
                Share your vision with us. We'll help you turn your ideas into
                reality.
              </p>

              <div className="progress">
                <div
                  className="progress-fill"
                  style={{
                    width: `${(currentStep / 3) * 100}%`,
                  }}
                ></div>
              </div>

              <div className="step-info">
                <span>STEP {currentStep} OF 3</span>

                <span>
                  {currentStep === 1
                    ? "Project Details"
                    : currentStep === 2
                      ? "Project Planning"
                      : "Contact Details"}
                </span>
              </div>

              {/* STEP 1: PROJECT DETAILS */}

              {currentStep === 1 && (
                <>
                  <h3>What would you like to build?</h3>

                  <div className="options">
                    {projectOptions.map((option) => {
                      const Icon = option.icon;

                      return (
                        <button
                          type="button"
                          key={option.name}
                          className={
                            projectType === option.name
                              ? "option selected"
                              : "option"
                          }
                          onClick={() => setProjectType(option.name)}
                        >
                          <Icon size={25} />
                          <span>{option.name}</span>
                        </button>
                      );
                    })}
                  </div>

                  <label htmlFor="description">Describe your project</label>

                  <textarea
                    id="description"
                    placeholder="Tell us what you want to create..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </>
              )}

              {/* STEP 2: PROJECT PLANNING */}

              {currentStep === 2 && (
                <>
                  <h3>Let's plan your project</h3>

                  <label htmlFor="budget">What is your estimated budget?</label>

                  <select
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  >
                    <option value="">Select your budget</option>
                    <option value="Below ₹50,000">Below ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">
                      ₹50,000 - ₹1,00,000
                    </option>
                    <option value="₹1,00,000 - ₹5,00,000">
                      ₹1,00,000 - ₹5,00,000
                    </option>
                    <option value="₹5,00,000+">₹5,00,000+</option>
                    <option value="Not decided yet">Not decided yet</option>
                  </select>

                  <label htmlFor="timeline">
                    When would you like the project completed?
                  </label>

                  <select
                    id="timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                  >
                    <option value="">Select your timeline</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1 - 3 months">1 - 3 months</option>
                    <option value="3 - 6 months">3 - 6 months</option>
                    <option value="More than 6 months">
                      More than 6 months
                    </option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </>
              )}

              {/* STEP 3: CONTACT DETAILS */}

              {currentStep === 3 && (
                <>
                  <h3>How can we reach you?</h3>

                  <p className="section-description">
                    Share your contact details so our team can discuss your
                    project with you.
                  </p>

                  <label htmlFor="name">Full Name *</label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <label htmlFor="email">Email Address *</label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label htmlFor="company">Company Name (Optional)</label>

                  <input
                    id="company"
                    type="text"
                    placeholder="Enter your company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />

                  <div className="summary">
                    <h3>Your Project Summary</h3>

                    <p>
                      <strong>Project:</strong> {projectType}
                    </p>

                    <p>
                      <strong>Budget:</strong> {budget}
                    </p>

                    <p>
                      <strong>Timeline:</strong> {timeline}
                    </p>

                    <p>
                      <strong>Description:</strong> {description}
                    </p>
                  </div>
                </>
              )}

              {/* ERROR MESSAGE */}

              {errorMessage && (
                <p className="error-message" role="alert">
                  {errorMessage}
                </p>
              )}

              {/* NAVIGATION BUTTONS */}

              <div className="form-actions">
                {currentStep > 1 && (
                  <button
                    type="button"
                    className="back-btn"
                    onClick={handleBack}
                    disabled={isSubmitting}
                  >
                    <ArrowLeft size={18} />
                    Back
                  </button>
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    className="continue-btn"
                    onClick={handleContinue}
                  >
                    Continue
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="continue-btn"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}

                    {!isSubmitting && <ArrowRight size={18} />}
                  </button>
                )}
              </div>
            </>
          ) : (
            /* SUCCESS SCREEN */

            <div className="success-screen">
              <CheckCircle size={65} />

              <h1>Thank you, {name}!</h1>

              <p>
                Your project inquiry has been submitted successfully. Our team
                can now review your project details.
              </p>

              <p className="success-note">
                Your information has been saved successfully.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

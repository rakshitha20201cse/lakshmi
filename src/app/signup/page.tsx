"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import signupSchema from "../../models/signupSchema"; // Corrected path
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);

    setTimeout(() => {
      setSubmitting(false);
      setSuccessMessage("Registration successful! Redirecting to login...");
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push("/login");
      }, 2000); // 2 seconds delay for success message
    }, 3000);
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h1 className="form-title">Sign Up</h1>

        {/* Success message */}
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}

        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={signupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="input-group">
                <label htmlFor="username" className="input-label">
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="input-field"
                />
                <ErrorMessage name="username" component="div" className="error-message" />
              </div>

              <div className="input-group">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input-field"
                />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div className="input-group">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input-field"
                />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>

              <div className="input-group">
                <label htmlFor="confirmPassword" className="input-label">
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="input-field"
                />
                <ErrorMessage name="confirmPassword" component="div" className="error-message" />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <style jsx>{`
        .signup-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: black;
          color: white;
        }

        .form-container {
          width: 100%;
          max-width: 400px;
          padding: 2rem;
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          color: #2d3748;
        }

        .form-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #2d3748;
          text-align: center;
          margin-bottom: 2rem;
        }

        .input-group {
          margin-bottom: 1.5rem;
        }

        .input-label {
          font-size: 1rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .input-field {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
          color: #2d3748;
        }

        .input-field:focus {
          border-color: #38b2ac;
          box-shadow: 0 0 0 3px rgba(56, 178, 172, 0.3);
        }

        .error-message {
          font-size: 0.875rem;
          color: #f56565;
          margin-top: 0.25rem;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background-color: #38b2ac;
          color: white;
          font-weight: 600;
          border-radius: 8px;
          border: none;
          margin-top: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #2c7a7b;
        }

        .submit-btn:disabled {
          background-color: #cbd5e0;
          cursor: not-allowed;
        }

        .success-message {
          background-color: #48bb78;
          color: white;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}

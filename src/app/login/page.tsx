"use client"; // Ensure the page is client-side rendered (Next.js 13+)

import React from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginSchema from "../../models/loginSchema";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);

    setTimeout(() => {
      setSubmitting(false);
      router.push("/"); // Redirect to homepage after login
    }, 3000);
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="logo-container">
       <center> <img src="https://media.istockphoto.com/id/152026274/photo/green-stethoscope.jpg?s=612x612&w=0&k=20&c=l4YFLh1VPmu7JM31kxI5Ee5lSmSfoffu7eIm8WXzllg=" alt="Logo" className="logo" /></center>
        
        </div>
        <h2 className="title">Login</h2>

        <Formik
          initialValues={{ identifier: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <div className="input-container">
                <label htmlFor="identifier" className="label">
                  Mobile / Email
                </label>
                <Field
                  type="text"
                  name="identifier"
                  placeholder="Enter your mobile or email"
                  className="input-field"
                />
                <ErrorMessage name="identifier" component="div" className="error-message" />
              </div>

              <div className="remember-forgot-container">
                <div className="remember">
                  <input type="checkbox" id="rememberMe" className="checkbox" />
                  <label htmlFor="rememberMe" className="remember-label">Remember Me</label>
                </div>
                <a href="#" className="forgot-link">Forgot Password</a>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>

              <div className="divider-container">
                <hr className="divider" />
                <span className="divider-text">Or login with</span>
                <hr className="divider" />
              </div>

              <button className="google-btn">
                <FcGoogle className="google-icon" />
                Continue with Google
              </button>

              <div className="sign-up-link">
                Don't have an account?{" "}
                <Link href="/signup" className="sign-up-text">
                  Sign Up
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: black;
        }

        .form-container {
          width: 100%;
          max-width: 400px;
          padding: 2rem;
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .logo-container {
          margin-bottom: 2rem;
          text-align: center;
        }

        .logo {
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
          background-color: #38b2ac;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          text-align: center;
          color: #2d3748;
        }

        .form {
          width: 100%;
        }

        .input-container {
          margin-bottom: 1.5rem;
        }

        .label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #4a5568;
          margin-bottom: 0.25rem;
        }

        .input-field {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.5rem;
          outline: none;
          color: #4a5568;
          font-size: 1rem;
        }

        .input-field:focus {
          border-color: #38b2ac;
        }

        .error-message {
          color: #f56565;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        .remember-forgot-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 1.5rem;
        }

        .remember {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .checkbox {
          height: 1.25rem;
          width: 1.25rem;
          border-color: #cbd5e0;
        }

        .remember-label {
          font-size: 0.875rem;
          color: #4a5568;
        }

        .forgot-link {
          font-size: 0.875rem;
          color: #ed64a6;
          text-decoration: none;
        }

        .forgot-link:hover {
          color: #d53f8c;
          text-decoration: underline;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: #38b2ac;
          color: white;
          font-weight: 600;
          border-radius: 0.5rem;
          border: none;
          margin-bottom: 1.5rem;
          cursor: pointer;
        }

        .submit-btn:hover {
          background: #2c7a7b;
        }

        .divider-container {
          display: flex;
          align-items: center;
          width: 100%;
          margin: 1.5rem 0;
          color: #a0aec0;
        }

        .divider {
          flex-grow: 1;
          border: 1px solid #e2e8f0;
        }

        .divider-text {
          padding: 0 1rem;
          font-size: 0.875rem;
        }

        .google-btn {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.5rem;
          background-color: #f7fafc;
          color: #4a5568;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .google-btn:hover {
          background-color: #edf2f7;
        }

        .google-icon {
          font-size: 1.25rem;
        }

        .sign-up-link {
          font-size: 0.875rem;
          color: #4a5568;
        }

        .sign-up-text {
          color: #38b2ac;
          text-decoration: none;
        }

        .sign-up-text:hover {
          color: #2c7a7b;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

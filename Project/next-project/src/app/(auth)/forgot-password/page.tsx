"use client";

import Link from "next/link";
import styles from "./ForgotPassword.module.css";
import { ArrowLeft, Mail, Lock } from "lucide-react";
import { useForgotPassword } from "@/hooks/forgotPassword/useForgotPassword";

export default function ForgotPasswordPage() {
  const { email, setEmail, error, setError, isResending, handleSubmit } =
    useForgotPassword();

  return (
    <div className={styles["forgot-password__container"]}>
      {/* Header */}
      <div className={styles["forgot-password__header"]}>
        <div className={styles["forgot-password__logo"]}>
          <span className={styles["forgot-password__logo-text"]}>W</span>
        </div>

        <h1 className={styles["forgot-password__title"]}>Forgot Password?</h1>
        <p className={styles["forgot-password__subtitle"]}>
          No worries, we&apos;ll send you reset instructions.
        </p>
      </div>

      {/* Form Card */}
      <div className={styles["forgot-password__card"]}>
        <form
          className={styles["forgot-password__form"]}
          onSubmit={handleSubmit}
        >
          {/* Email Input */}
          <div>
            <label className={styles["forgot-password__label"]}>
              Email Address
            </label>
            <div
              className={`
                ${styles["forgot-password__input-wrapper"]} 
                ${error ? styles["forgot-password__input-wrapper--error"] : ""}
              `}
            >
              <Mail
                className={styles["forgot-password__input-icon"]}
                size={20}
              />
              <input
                className={styles["forgot-password__input"]}
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
            </div>

            {error && (
              <p className={styles["forgot-password__error-text"]}>{error}</p>
            )}

            <p className={styles["forgot-password__hint"]}>
              We&apos;ll send a password reset link to this email address.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={styles["forgot-password__submit-btn"]}
            disabled={isResending}
          >
            {isResending ? (
              <>
                <svg
                  className={styles["forgot-password__spinner"]}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Sending...
              </>
            ) : (
              <>Reset Password</>
            )}
          </button>
        </form>

        {/* Back Link */}
        <Link href="/login" className={styles["forgot-password__back-link"]}>
          <ArrowLeft size={16} />
          Back to Login
        </Link>
      </div>

      {/* Security Notice Card */}
      <div className={styles["forgot-password__notice-card"]}>
        <div className={styles["forgot-password__notice-icon"]}>
          <Lock size={20} />
        </div>
        <div className={styles["forgot-password__notice-content"]}>
          <h3 className={styles["forgot-password__notice-title"]}>
            Security Notice
          </h3>
          <p className={styles["forgot-password__notice-text"]}>
            For your security, the reset link will expire after 24 hours. If you
            didn&apos;t request a password reset, please ignore this or contact
            support.
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import styles from "./ForgotPassword.module.css";
import { ArrowLeft, Mail, Lock } from "lucide-react";
import { useForgotPassword } from "@/hooks/forgotPassword/useForgotPassword";

export default function ForgotPasswordPage() {
  const { email, setEmail, error, setError, isResending, handleSubmit } =
    useForgotPassword();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoText}>W</span>
        </div>

        {/* Title */}
        <h1 className={styles.title}>Forgot Password?</h1>
        <p className={styles.subtitle}>
          No worries, we&apos;ll send you reset instructions.
        </p>
      </div>

      {/* Form Card */}
      <div className={styles.card}>
        <form className={styles.formGroup} onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className={styles.label}>Email Address</label>
            <div
              className={`${styles.inputWrapper} ${error ? styles.inputError : ""}`}
            >
              <Mail className={styles.inputIcon} size={20} />
              <input
                className={styles.input}
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
            </div>
            {error && <p className={styles.errorText}>{error}</p>}
            <p className={styles.hint}>
              We&apos;ll send a password reset link to this email address.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={styles.submitBtn}
            onClick={handleSubmit}
          >
            {isResending ? (
              <>
                <svg
                  className={styles.spinner}
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
        <Link href="/login" className={styles.backLink}>
          <ArrowLeft size={16} />
          Back to Login
        </Link>
      </div>

      {/* Security Notice Card */}
      <div className={styles.noticeCard}>
        <div className={styles.noticeIcon}>
          <Lock size={20} />
        </div>
        <div className={styles.noticeContent}>
          <h3 className={styles.noticeTitle}>Security Notice</h3>
          <p className={styles.noticeText}>
            For your security, the reset link will expire after 24 hours. If you
            didn&apos;t request a password reset, please ignore this or contact
            support.
          </p>
        </div>
      </div>
    </div>
  );
}

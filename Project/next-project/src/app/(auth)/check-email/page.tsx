"use client";

import Link from "next/link";
import styles from "./CheckEmail.module.css";
import { CircleCheckBig, Send } from "lucide-react";
import { useCheckEmail } from "@/hooks/checkEmail/useCheckEmail";

export default function CheckEmailPage() {
  const { email, isResending, handleResend } = useCheckEmail();

  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logo}>W</div>

      {/* Card */}
      <div className={styles.card}>
        {/* Success Icon */}
        <div className={styles.iconWrapper}>
          <div className={styles.successIcon}>
            <CircleCheckBig size={32} strokeWidth={2.5} />
          </div>
        </div>

        {/* Title */}
        <h1 className={styles.title}>Check Your Email</h1>
        <p className={styles.subtitle}>
          We&apos;ve sent a password reset link to:
        </p>
        <p className={styles.email}>{email || "your@email.com"}</p>
        <p className={styles.description}>
          Click the link in the email to reset your password. The link will
          expire in 24 hours.
        </p>

        {/* Divider */}
        <div className={styles.divider}>
          <span>Didn&apos;t receive the email?</span>
        </div>

        {/* Resend Button */}
        <button
          type="button"
          className={`${styles.resendBtn}`}
          onClick={handleResend}
          disabled={isResending}
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
            <>
              <Send size={16} />
              Resend Email
            </>
          )}
        </button>

        {/* Back Button */}
        <Link href="/login" className={styles.backBtn}>
          Back to Login
        </Link>

        {/* Note */}
        <div className={styles.noteBox}>
          <p className={styles.noteText}>
            <strong>Note:</strong> If you don&apos;t see the email in your
            inbox, please check your spam or junk folder.
          </p>
        </div>
      </div>

      {/* Footer */}
      <p className={styles.footer}>
        Need more help?{" "}
        <Link href="/support" className={styles.link}>
          Contact Support
        </Link>
      </p>
    </div>
  );
}

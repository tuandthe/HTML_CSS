"use client";

import Link from "next/link";
import styles from "./CheckEmail.module.css";
import { CircleCheckBig, Send } from "lucide-react";
import { useCheckEmail } from "@/hooks/checkEmail/useCheckEmail";

export default function CheckEmailPage() {
  const { email, isResending, handleResend } = useCheckEmail();

  return (
    <div className={styles['check-email__container']}>
      {/* Header */}
      <div className={styles['check-email__header']}> 
      {/* Element: Logo */}
      <div className={styles['check-email__logo']}>
        <span className={styles['check-email__logo-text']}>W</span>
      </div>
     </div>
      {/* Element: Card */}
      <div className={styles['check-email__card']}>
        
        {/* Icon */}
        <div className={styles['check-email__icon-wrapper']}>
          <div className={styles['check-email__success-icon']}>
            <CircleCheckBig size={32} strokeWidth={2.5} />
          </div>
        </div>

        <div className={styles['check-email__text-content']}>
        {/* Text Content */}
        <h1 className={styles['check-email__title']}>Check Your Email</h1>
        <p className={styles['check-email__subtitle']}>
          We&apos;ve sent a password reset link to:
        </p>
        <p className={styles['check-email__email-text']}>
          {email || "your@email.com"}
        </p>
        <p className={styles['check-email__description']}>
          Click the link in the email to reset your password. The link will
          expire in 24 hours.
        </p>
        </div>

        {/* Divider */}
        <div className={styles['check-email__divider']}>
          <span>Didn&apos;t receive the email?</span>
        </div>

        {/* Resend Button */}
        <button
          type="button"
          className={styles['check-email__resend-btn']}
          onClick={handleResend}
          disabled={isResending}
        >
          {isResending ? (
            <>
              <svg
                className={styles['check-email__spinner']}
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
        <Link href="/login" className={styles['check-email__back-btn']}>
          Back to Login
        </Link>

        {/* Note Box */}
        <div className={styles['check-email__note-box']}>
          <p className={styles['check-email__note-text']}>
            <strong>Note:</strong> If you don&apos;t see the email in your
            inbox, please check your spam or junk folder.
          </p>
        </div>
      </div>

      {/* Element: Footer */}
      <p className={styles['check-email__footer']}>
        Need more help?{" "}
        <Link href="/support" className={styles['check-email__footer-link']}>
          Contact Support
        </Link>
      </p>
    </div>
  );
}
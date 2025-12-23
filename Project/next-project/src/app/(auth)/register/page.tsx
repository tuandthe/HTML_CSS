"use client";

import Link from "next/link";
import styles from "./Register.module.css";
import { Mail, User, Lock, EyeOff, Eye, Check } from "lucide-react";
import { useRegister } from "@/hooks/register/useRegister";

export default function RegisterPage() {
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    termsAccepted,
    setTermsAccepted,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    passwordsMatch,
    errors,
    strengthInfo,
    handleSubmit,
  } = useRegister();

  return (
    <div className={styles["register__container"]}>
      {/* Header */}
      <div className={styles["register__header"]}>
        <div className={styles["register__logo"]}>
          <span className={styles["register__logo-text"]}>W</span>
        </div>
        <h1 className={styles["register__title"]}>Create Account</h1>
        <p className={styles["register__subtitle"]}>
          Join us and start shopping
        </p>
      </div>

      {/* Form Card */}
      <div className={styles["register__card"]}>
        <form className={styles["register__form"]} onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className={styles["register__label"]}>Full Name</label>
            <div
              className={`
                ${styles["register__input-group"]} 
                ${errors.fullName ? styles["register__input-group--error"] : ""}
              `}
            >
              <User className={styles["register__icon"]} size={20} />
              <input
                className={styles["register__input"]}
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            {errors.fullName && (
              <p className={styles["register__error-text"]}>
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className={styles["register__label"]}>Email Address</label>
            <div
              className={`
                ${styles["register__input-group"]} 
                ${errors.email ? styles["register__input-group--error"] : ""}
              `}
            >
              <Mail className={styles["register__icon"]} size={20} />
              <input
                className={styles["register__input"]}
                type="text"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && (
              <p className={styles["register__error-text"]}>{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className={styles["register__label"]}>Password</label>
            <div
              className={`
                ${styles["register__input-group"]} 
                ${errors.password ? styles["register__input-group--error"] : ""}
              `}
            >
              <Lock className={styles["register__icon"]} size={20} />
              <input
                className={styles["register__input"]}
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className={styles["register__eye-btn"]}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Password Strength Bar */}
            {password && (
              <div className={styles["register__strength-container"]}>
                <div className={styles["register__strength-bar"]}>
                  <div
                    className={styles["register__strength-fill"]}
                    style={{
                      width: strengthInfo.width,
                      backgroundColor: strengthInfo.color,
                    }}
                  />
                </div>
                <span
                  className={styles["register__strength-label"]}
                  style={{ color: strengthInfo.color }}
                >
                  {strengthInfo.label}
                </span>
              </div>
            )}

            {errors.password && (
              <p className={styles["register__error-text"]}>
                {errors.password}
              </p>
            )}

            {/* Password Requirements */}
            {password && (
              <p className={styles["register__requirement-text"]}>
                Password must contain uppercase, lowercase, and number
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className={styles["register__label"]}>
              Confirm Password
            </label>
            <div
              className={`
                ${styles["register__input-group"]} 
                ${errors.confirmPassword ? styles["register__input-group--error"] : ""}
              `}
            >
              <Lock className={styles["register__icon"]} size={20} />
              <input
                className={styles["register__input"]}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className={styles["register__eye-btn"]}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Password Match Indicator */}
            {passwordsMatch && (
              <p className={styles["register__match-text"]}>
                <Check size={16} />
                Passwords match
              </p>
            )}
            {errors.confirmPassword && (
              <p className={styles["register__error-text"]}>
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Terms */}
          <div className={styles["register__terms-row"]}>
            <input
              type="checkbox"
              id="terms"
              className={styles["register__checkbox"]}
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms" className={styles["register__terms-text"]}>
              I agree to the{" "}
              <Link href="#" className={styles["register__terms-link"]}>
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link href="#" className={styles["register__terms-link"]}>
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.terms && (
            <p className={styles["register__error-text"]}>{errors.terms}</p>
          )}

          {/* Submit Button */}
          <button type="submit" className={styles["register__submit-btn"]}>
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className={styles["register__divider"]}>
          <span>Or sign up with</span>
        </div>

        {/* Social Buttons */}
        <div className={styles["register__social-group"]}>
          <button type="button" className={styles["register__social-btn"]}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Google</span>
          </button>
          <button type="button" className={styles["register__social-btn"]}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Facebook</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className={styles["register__footer"]}>
        Already have an account?{" "}
        <Link href="/login" className={styles["register__link"]}>
          Sign in
        </Link>
      </p>
    </div>
  );
}

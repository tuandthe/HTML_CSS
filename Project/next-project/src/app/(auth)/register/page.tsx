"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./Register.module.css";
import { Mail, User, Lock, EyeOff, Eye, Check } from "lucide-react";

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  terms?: string;
}

type PasswordStrength = "weak" | "medium" | "strong" | "";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // Password strength calculation
  const calculatePasswordStrength = (pwd: string): PasswordStrength => {
    if (!pwd) return "";

    const hasLower = /[a-z]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const isLongEnough = pwd.length >= 8;

    const score = [hasLower, hasUpper, hasNumber, isLongEnough].filter(
      Boolean,
    ).length;

    if (score <= 2) return "weak";
    if (score === 3) return "medium";
    return "strong";
  };

  const passwordStrength = calculatePasswordStrength(password);
  const passwordsMatch =
    password && confirmPassword && password === confirmPassword;

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    // Validate fields
    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!termsAccepted) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      router.push("/dashboard");
    }
  };

  // Get password strength label and color
  const getStrengthInfo = () => {
    switch (passwordStrength) {
      case "weak":
        return { label: "Weak", color: "#ef4444", width: "33%" };
      case "medium":
        return { label: "Medium", color: "#f59e0b", width: "66%" };
      case "strong":
        return { label: "Strong", color: "#22c55e", width: "100%" };
      default:
        return { label: "", color: "#e5e7eb", width: "0%" };
    }
  };

  const strengthInfo = getStrengthInfo();

  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logo}>W</div>

      {/* Title */}
      <h1 className={styles.title}>Create Account</h1>
      <p className={styles.subtitle}>Join us and start shopping</p>

      {/* Form Card */}
      <div className={styles.card}>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name</label>
            <div
              className={`${styles.inputWrapper} ${errors.fullName ? styles.inputError : ""}`}
            >
              <User className={styles.inputIcon} size={20} />
              <input
                className={styles.input}
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            {errors.fullName && (
              <p className={styles.errorText}>{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Email Address</label>
            <div
              className={`${styles.inputWrapper} ${errors.email ? styles.inputError : ""}`}
            >
              <Mail className={styles.inputIcon} size={20} />
              <input
                className={styles.input}
                type="text"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>

          {/* Password */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <div
              className={`${styles.inputWrapper} ${errors.password ? styles.inputError : ""}`}
            >
              <Lock className={styles.inputIcon} size={20} />
              <input
                className={styles.input}
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Password Strength Bar */}
            {password && (
              <div className={styles.strengthContainer}>
                <div className={styles.strengthBar}>
                  <div
                    className={styles.strengthFill}
                    style={{
                      width: strengthInfo.width,
                      backgroundColor: strengthInfo.color,
                    }}
                  />
                </div>
                <span
                  className={styles.strengthLabel}
                  style={{ color: strengthInfo.color }}
                >
                  {strengthInfo.label}
                </span>
              </div>
            )}
            {errors.password && (
              <p className={styles.errorText}>{errors.password}</p>
            )}

            {/* Password Requirements */}
            {password && (
              <p className={styles.requirementText}>
                Password must contain uppercase, lowercase, and number
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Confirm Password</label>
            <div
              className={`${styles.inputWrapper} ${errors.confirmPassword ? styles.inputError : ""}`}
            >
              <Lock className={styles.inputIcon} size={20} />
              <input
                className={styles.input}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {/* Password Match Indicator */}
            {passwordsMatch && (
              <p className={styles.matchText}>
                <Check size={16} />
                Passwords match
              </p>
            )}
            {errors.confirmPassword && (
              <p className={styles.errorText}>{errors.confirmPassword}</p>
            )}
          </div>

          {/* Terms */}
          <div className={styles.termsRow}>
            <input
              type="checkbox"
              id="terms"
              className={`${styles.checkbox}`}
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms" className={styles.termsText}>
              I agree to the{" "}
              <Link href="#" className={styles.termsLink}>
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link href="#" className={styles.termsLink}>
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.terms && <p className={styles.errorText}>{errors.terms}</p>}
          {/* Submit Button */}
          <button type="submit" className={styles.submitBtn}>
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className={styles.divider}>
          <span>Or sign up with</span>
        </div>

        {/* Social Buttons */}
        <div className={styles.socialButtons}>
          <button type="button" className={styles.socialBtn}>
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
          <button type="button" className={styles.socialBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Facebook</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className={styles.footer}>
        Already have an account?{" "}
        <Link href="/login" className={styles.link}>
          Sign in
        </Link>
      </p>
    </div>
  );
}

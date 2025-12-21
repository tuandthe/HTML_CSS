import { getPasswordScore, isValidEmail } from "@/lib/utils/validators";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  terms?: string;
}

type PasswordStrength = "weak" | "medium" | "strong" | "";

export function useRegister() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

const getStrengthLabel = (pwd: string): PasswordStrength => {
    const score = getPasswordScore(pwd);
    if (!pwd) return "";
    if (score <= 2) return "weak";
    if (score === 3) return "medium";
    return "strong";
  };

  const passwordStrength = getStrengthLabel(password);
  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    // Validate fields
    if (!fullName.trim()) newErrors.fullName = "Full name is required";

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
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

  return {
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
    errors,
    setErrors,
    passwordStrength,
    passwordsMatch,
    strengthInfo,
    handleSubmit,
  };
}

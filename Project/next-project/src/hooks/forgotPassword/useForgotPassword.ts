import { isValidEmail } from "@/lib/utils/validators";
import { useRouter } from "next/router";
import { useState } from "react";

export function useForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isResending, setIsResending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    localStorage.setItem("resetEmail", email);
    setIsResending(true);
    setTimeout(() => {
      setIsResending(false);
      router.push("/check-email");
    }, 2000);
  };
  return {
    email,
    setEmail,
    error,
    setError,
    isResending,
    handleSubmit,
  };
}

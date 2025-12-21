import { isValidEmail } from "@/lib/utils/validators";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newError: { email?: string; password?: string } = {};
    if (!email.trim()) {
      newError.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newError.email = "Email is invalid";
    }
   if (!password) {
      newError.password = "Password is required";
    } else if (password.length < 6) {
      newError.password = "Password must be at least 6 characters";
    }

    setErrors(newError);

    if (Object.keys(newError).length === 0) {
      router.push("/dashboard");
    }
  };
  return {
    showPassword,
    setShowPassword,
    email,
    setEmail,
    password,
    setPassword,
    errors,
    setErrors,
    handleSubmit,
  };
}

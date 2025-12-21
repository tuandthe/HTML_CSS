import { useEffect, useState } from "react";

export function useCheckEmail() {
  const [email, setEmail] = useState("");
  const [isResending, setIsResending] = useState(false);
  useEffect(() => {
    const storedEmail = localStorage.getItem("resetEmail");
    if (storedEmail) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEmail(storedEmail);
    }
  }, []);
  const handleResend = () => {
    setIsResending(true);

    setTimeout(() => {
      setIsResending(false);
    }, 2000);
  };
  return { email, isResending, handleResend };
}

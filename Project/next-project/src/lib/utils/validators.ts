// src/utils/validators.ts
import { 
  EMAIL_REGEX, 
  HAS_LOWER_CASE_REGEX, 
  HAS_NUMBER_REGEX, 
  HAS_UPPER_CASE_REGEX 
} from "@/constants/regex";

// 1. Hàm kiểm tra Email
export const isValidEmail = (email: string): boolean => {
  if (!email) return false;
  return EMAIL_REGEX.test(email);
};

// 2. Hàm tính điểm sức mạnh mật khẩu (trả về 0-4)
export const getPasswordScore = (password: string): number => {
  if (!password) return 0;

  const hasLower = HAS_LOWER_CASE_REGEX.test(password);
  const hasUpper = HAS_UPPER_CASE_REGEX.test(password);
  const hasNumber = HAS_NUMBER_REGEX.test(password);
  const isLongEnough = password.length >= 8;

  return [hasLower, hasUpper, hasNumber, isLongEnough].filter(Boolean).length;
};
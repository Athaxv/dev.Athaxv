import { formatIncompletePhoneNumber } from "@/lib/libphonenumber";

export function decodeEmail(email: string) {
  try {
    // Check if the email is already decoded (contains @ symbol)
    if (email.includes("@")) {
      return email;
    }
    // Try to decode base64
    return atob(email);
  } catch (error) {
    // If decoding fails, return the original string
    console.warn("Failed to decode email, using original:", error);
    return email;
  }
}

export function decodePhoneNumber(phone: string) {
  try {
    // Try to decode base64
    return atob(phone);
  } catch (error) {
    // If decoding fails, return the original string
    console.warn("Failed to decode phone number, using original:", error);
    return phone;
  }
}

export function formatPhoneNumber(phone: string) {
  return formatIncompletePhoneNumber(phone);
}

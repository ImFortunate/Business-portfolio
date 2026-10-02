// Shared by the booking modal (client) and /api/enquiry (server) so both validate the same way.

export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  company: string;
  date: string;
  time: string;
  message: string;
};

export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;

const MAX_LENGTH: Record<keyof Enquiry, number> = {
  name: 120,
  email: 254,
  phone: 40,
  company: 160,
  date: 10,
  time: 5,
  message: 4000,
};

export function toEnquiry(input: Record<string, unknown>): Enquiry {
  const field = (key: keyof Enquiry) =>
    typeof input[key] === "string" ? (input[key] as string).trim().slice(0, MAX_LENGTH[key]) : "";

  return {
    name: field("name"),
    email: field("email"),
    phone: field("phone"),
    company: field("company"),
    date: field("date"),
    time: field("time"),
    message: field("message"),
  };
}

export function validateEnquiry(enquiry: Enquiry): EnquiryErrors {
  const errors: EnquiryErrors = {};

  if (!enquiry.name) errors.name = "Please enter your full name.";

  if (!enquiry.email) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email))
    errors.email = "Please enter a valid email address.";

  if (!enquiry.phone) errors.phone = "Please enter your phone number.";
  else if (!/^\+?[\d\s()-]{7,}$/.test(enquiry.phone))
    errors.phone = "Please enter a valid phone number.";

  if (enquiry.date && !/^\d{4}-\d{2}-\d{2}$/.test(enquiry.date))
    errors.date = "Please choose a valid date.";

  if (enquiry.time && !/^\d{2}:\d{2}$/.test(enquiry.time))
    errors.time = "Please choose a valid time.";

  return errors;
}

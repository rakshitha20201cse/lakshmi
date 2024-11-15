import * as yup from "yup";

const loginSchema = yup.object().shape({
  identifier: yup
    .string()
    .required("Mobile or Email is required")
    .test(
      "is-valid-email-or-phone",
      "Must be a valid email or mobile number",
      (value) =>
        /^\d{10}$/.test(value) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ),
});

export default loginSchema;
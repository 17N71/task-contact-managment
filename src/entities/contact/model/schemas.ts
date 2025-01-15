import { z } from "zod";

export const createContactSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required.")
    .max(50, "Name should not exceed 50 characters."),
  username: z
    .string()
    .nonempty("Username is required.")
    .startsWith("@", "Username should start @")
    .max(30, "Username should not exceed 30 characters."),
  email: z
    .string()
    .nonempty("Email is required.")
    .email("Please provide a valid email address."),
  about: z.string().max(200, "About section should not exceed 200 characters."),
  avatar: z.string(),
  external_url: z
    .string()
    .regex(
      /^https?:\/\/[^\s$.?#].[^\s]*$/i,
      "External URL must be a valid URL starting with http:// or https://."
    ),
});

export const updateContactSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required.")
    .max(50, "Name should not exceed 50 characters."),
  username: z
    .string()
    .nonempty("Username is required.")
    .max(30, "Username should not exceed 30 characters."),
  email: z
    .string()
    .nonempty("Email is required.")
    .email("Please provide a valid email address."),
  about: z.string().max(200, "About section should not exceed 200 characters."),
  external_url: z
    .string()
    .regex(
      /^https?:\/\/[^\s$.?#].[^\s]*$/i,
      "External URL must be a valid URL starting with http:// or https://."
    ),
});

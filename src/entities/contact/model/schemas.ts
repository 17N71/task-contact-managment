import { z } from "zod";

export const createContactSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string(),
  about: z.string(),
  avatar: z.string(),
  external_url: z.string(),
});

export const updateContactSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string(),
  about: z.string(),
  external_url: z.string(),
});

import { z } from 'zod';

export const resumeSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  city: z.string().min(2),
  country: z.string().min(4),
  skills: z.array(z.string()),
  experience: z.array(
    z.object({
      company: z.string(),
      role: z.string(),
      years: z.number().min(0),
    }),
  ),
});

import { z } from 'zod';

export const resumeSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  city: z.string().min(2),
  country: z.string().min(4),
  description: z.string(),
  skills: z.array(z.string()),
  experience: z.array(
    z.object({
      company: z.string(),
      position: z.string(),
      years: z.string().min(0),
    }),
  ),
  education: z.array(
    z.object({
      place: z.string(),
      grYear: z.string(),
    })
  )
});

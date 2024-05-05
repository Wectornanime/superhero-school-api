import { z } from "zod";

export const CreateSuperDto = z.object({
  heroName: z.string().min(3),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  realName: z.string().min(3).optional(),
  birthDate: z.date().optional(),
  race: z.string().min(3).optional(),
  height: z.number().optional(),
  weight: z.number().optional()
});

export const UpdateSuperDto = z.object({
  heroName: z.string().min(3).optional(),
  firstName: z.string().min(3).optional(),
  lastName: z.string().min(3).optional(),
  realName: z.string().min(3).optional().optional(),
  birthDate: z.date().optional(),
  race: z.string().min(3).optional(),
  height: z.number().optional(),
  weight: z.number().optional()
});

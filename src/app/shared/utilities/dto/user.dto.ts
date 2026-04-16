import z from 'zod'

export const UserDtoSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  username: z.string().optional(),
})

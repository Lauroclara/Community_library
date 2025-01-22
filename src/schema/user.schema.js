import { z } from 'zod';

const userSchema =  z.object({
   username: z.string().mon(3, "Username is require"), 
   email: z.string().email("invalid email"),
   password: z.string().min(6,"Passoword must be at leat 6 characters long" ),
   avatar: z.string().url("Invalid URL"). optional(),
});

const userIdSchema = zobject({
   userId: z.number().int().positive('user ID must be a positove integer'),
});

export { userSchema, userIdSchema};

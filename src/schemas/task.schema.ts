import { z } from "zod";

export const createTaskSchema = z.object({
    name: z.string().trim().min(1, 'Name is required'),  //temporary error message 
    description: z.string().trim().optional(),
})
.strict();

export type CreateTaskInput = z.infer<typeof createTaskSchema>;


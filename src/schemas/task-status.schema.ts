import { z } from 'zod';
import { TASK_STATUSES } from '../models/task.model';

export const updateTaskStatusSchema = z.object({

    status: z.enum(TASK_STATUSES),
    
})
.strict();

export type UpdateTaskStatusInput = z.infer<typeof updateTaskStatusSchema>;

import type { Request, Response } from 'express';
import { ZodError } from 'zod';
import { createTaskSchema } from '../schemas/task.schema';
import { tasksService } from '../services/tasks.service';


export function createTaskHandler(req: Request, res: Response) {
  
  try {
    
    const input = createTaskSchema.parse(req.body);
    const task = tasksService.createTask(input);
    
    return res.status(201).json(task);

  } catch (err) {

    if (err instanceof ZodError) {
      return res.status(400).json({
        message: 'Validation error',
        issues: err.issues,
      });
    }

    //Unexpected error
    return res.status(500).json({ message: 'Internal server error'})
  }
};

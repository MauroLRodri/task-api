import type { Request, Response } from 'express';
import { createTaskSchema } from '../schemas/task.schema';
import { tasksService } from '../services/tasks.service';

export function createTaskHandler(req: Request, res: Response) {
  // TODO: validate and call the service in the next step
  createTaskSchema.parse(req.body);

  // placeholder
  res.status(501).json({ message: 'Not implemented' });
}

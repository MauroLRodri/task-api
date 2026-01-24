import type { Request, Response } from 'express';
import { ZodError } from 'zod';
import { createTaskSchema } from '../schemas/task.schema';
import { tasksService } from '../services/tasks.service';
import { updateTaskStatusSchema } from '../schemas/task-status.schema';


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

export function listTasksHandler(req: Request, res: Response) {

  try{
    const includeArchived = req.query.includeArchived === 'true';
    const tasks = tasksService.listTasks(includeArchived);

    return res.status(201).json(tasks);

  } catch (err) {
    //Unexpected error
    return res.status(500).json({ message: 'Internal server error'})
  }
}

export function updateTaskStatusHandler(req: Request<{ id: string }>, res: Response) {
  
  try{
    const id = req.params.id;
    const input = updateTaskStatusSchema.parse(req.body);

    const updated = tasksService.updateTaskStatus(id, input.status);

    if(!updated) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json(updated);
  } catch (err) {

    if(err instanceof ZodError) {
      return res.status(400).json({
        message: 'Validation error',
        issues: err.issues,
      });
    }

    if (err instanceof Error && err.message === 'INVALID_STATUS_TRANSITION') {
      return res.status(409).json({
        message: 'Invalid status transition',
      });
    }

    return res.status(500).json({ message: 'Internal server error' });
  }
}
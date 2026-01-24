import { Router } from 'express';
import { createTaskHandler, listTasksHandler, updateTaskStatusHandler  } from '../controllers/tasks.controller';

export const tasksRouter = Router();

tasksRouter.post('/tasks', createTaskHandler);

tasksRouter.get('/tasks', listTasksHandler);

tasksRouter.patch('/tasks/:id/status', updateTaskStatusHandler);
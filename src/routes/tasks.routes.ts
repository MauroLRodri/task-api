import { Router } from 'express';
import { createTaskHandler, listTasksHandler } from '../controllers/tasks.controller';

export const tasksRouter = Router();

tasksRouter.post('/tasks', createTaskHandler);
tasksRouter.get('/tasks', listTasksHandler);
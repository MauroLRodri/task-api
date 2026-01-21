import { Router } from 'express';
import { createTaskHandler } from '../controllers/tasks.controller';

export const tasksRouter = Router();

tasksRouter.post('/tasks', createTaskHandler);
import type { Task } from '../models/task.model';
import type { CreateTaskInput } from '../schemas/task.schema';

const tasks: Task[] = [];

export const tasksService = {
    createTask(_input: CreateTaskInput): Task {
      // TODO: implement in the next step
      throw new Error('Not implemented');
    },
  
    
  };
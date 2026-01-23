import { randomUUID } from 'crypto';
import type { Task, TaskStatus } from '../models/task.model';
import type { CreateTaskInput } from '../schemas/task.schema';

const tasks: Task[] = [];

export const tasksService = {
    createTask( input: CreateTaskInput): Task {
        
        const task: Task = {
            id: randomUUID(),
            name: input.name,
            description: input.description,
            status: 'todo',
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        
        tasks.push(task);
        return task
    },

    listTasks(includeArchived = false): Task[] {
        
        if (includeArchived) {
            return tasks;
        }
        
        return tasks.filter(task => task.status !== 'archived');
    }

};
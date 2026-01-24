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
    },

    updateTaskStatus(id: string, newStatus: TaskStatus) {

        const task = tasks.find(t => t.id === id);

        if(!task) {
            return null;
        }

        const allowedTransitions: Record<TaskStatus, TaskStatus[]> = {
            todo: ['in_progress', 'archived'],
            in_progress: ['todo', 'done', 'archived'],
            done: ['in_progress', 'archived'],
            archived: ['todo'],
        };

        const currentStatus = task.status;

        if (currentStatus === newStatus) {
            return task;
        }

        const allowed = allowedTransitions[currentStatus];

        if(!allowed.includes(newStatus)) {
            throw new Error('INVALID_STATUS_TRANSITION');
        }

        task.status = newStatus;
        task.updatedAt = new Date();

        return task;
    }
};
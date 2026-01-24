
export const TASK_STATUSES = ['todo', 'in_progress', 'done', 'archived'] as const;
export type TaskStatus = (typeof TASK_STATUSES)[number];

export type Task = {
    id: string;
    name: string;
    description?: string;
    status: TaskStatus;
    createdAt: Date;
    updatedAt: Date;
};



export type TaskStatus = 'todo' | 'in_progress' | 'done' | 'archived';

export type Task = {
    id: string;
    name: string;
    description?: string;
    status: TaskStatus;
    createdAt: Date;
    updatedAt: Date;
};


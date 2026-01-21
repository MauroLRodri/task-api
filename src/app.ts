import express from 'express';
import { tasksRouter } from './routes/tasks.routes'; 

const app = express();

console.log('tasksRouter:', typeof tasksRouter, tasksRouter);

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use(tasksRouter);

export default app;


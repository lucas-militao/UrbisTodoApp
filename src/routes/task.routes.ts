import { request, response, Router } from 'express';
import { uuid } from 'uuidv4';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const tasksRouter = Router();

tasksRouter.use(ensureAuthenticated);

const tasks = [];

tasksRouter.post('/', async (request, response) => {
  const { name, concluded, responsible } = request.body;

  const newTask = {
    id: uuid(),
    name,
    concluded,
    responsible,
  };

  tasks.push(newTask);

  return response.json(newTask);
});

tasksRouter.get('/', async (request, response) => {
  return response.json(tasks);
});

tasksRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, concluded } = request.body;

  const tasksIndex = tasks.findIndex(task => task.id === id);

  if (tasksIndex < 0) {
    return response.status(400).json({ message: 'tarefa não encontrada!' });
  }

  const responsible = tasks[tasksIndex].responsible;
  const newTask = {
    id,
    name,
    responsible,
    concluded,
  };

  tasks[tasksIndex] = newTask;

  return response.json(newTask);
});

tasksRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const tasksIndex = tasks.findIndex(task => task.id === id);

  if (tasksIndex < 0) {
    return response.status(400).json({ message: 'tarefa não encontrada!' });
  }

  tasks.splice(tasksIndex, 1);

  return response.status(204).send();
});

export default tasksRouter;

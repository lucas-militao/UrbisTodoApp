import { request, response, Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { uuid } from 'uuidv4';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import TasksRepository from '../repositories/TasksRepository';
import CreateTaskService from '../services/CreateTaskService';

const tasksRouter = Router();

tasksRouter.use(ensureAuthenticated);

tasksRouter.post('/', async (request, response) => {
  const { name, concluded } = request.body;

  const createTask = new CreateTaskService();

  const newTask = await createTask.execute({
    name,
    responsible_id: request.user.id,
  });

  return response.json(newTask);
});

tasksRouter.get('/', async (request, response) => {
  const taskRepository = getCustomRepository(TasksRepository);
  const tasks = await taskRepository.find();

  return response.json(tasks);
});

tasksRouter.put('/:id', async (request, response) => {});

tasksRouter.delete('/:id', async (request, response) => {});

export default tasksRouter;

import { getCustomRepository } from 'typeorm';

import Task from '../models/Task';
import TasksRepository from '../repositories/TasksRepository';

interface Request {
  name: string;
  responsible_id: string;
}

class CreateTaskService {
  public async execute({ name, responsible_id }: Request): Promise<Task> {
    const taskRepository = getCustomRepository(TasksRepository);

    const newTask = taskRepository.create({
      name,
      responsible_id,
      concluded: false,
    });

    await taskRepository.save(newTask);

    return newTask;
  }
}

export default CreateTaskService;

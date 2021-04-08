import { getRepository } from 'typeorm';

import Task from '../models/Task';

interface Request {
  name: string;
  responsible: string;
}

class CreateTaskService {
  public async execute({ name, responsible }: Request): Promise<Task> {
    const taskRepository = getRepository(Task);

    const newTask = taskRepository.create({
      name,
      responsible,
      concluded: false,
    });

    await taskRepository.save(newTask);

    return newTask;
  }
}

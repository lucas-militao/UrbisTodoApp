import { Router } from 'express';

import usersRouter from './user.routes';
import sessionsRouter from './session.routes';
import tasksRouter from './task.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/tasks', tasksRouter);

export default routes;

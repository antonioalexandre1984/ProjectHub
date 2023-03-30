import { Router } from 'express';
import userRoutes from './user';
import clientRoutes from './client';
import sessionRoutes from './session';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.use(`${prefixRoutes}/sessions`, sessionRoutes);
routes.use(`${prefixRoutes}/users`, userRoutes);
routes.use(`${prefixRoutes}/clients`, clientRoutes);


export default routes;

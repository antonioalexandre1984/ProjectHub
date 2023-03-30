import { Router } from 'express';
import ClientController from '../controllers/ClientController';

const clientRoutes = Router();
const clientController = new ClientController();

clientRoutes.get('/', clientController.index);
clientRoutes.get('/paginated', clientController.paginated);
clientRoutes.get('/:id', clientController.show);
clientRoutes.get('/search/:name', clientController.search);
clientRoutes.post('/', clientController.create);
clientRoutes.put('/:id', clientController.update);
clientRoutes.delete('/:id', clientController.delete);

export default clientRoutes;

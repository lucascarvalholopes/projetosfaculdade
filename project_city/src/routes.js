import { Router } from 'express';
import CitiesController from './controllers/CitiesController.js';

const routes = Router();

routes.get('/cities', CitiesController.index);
routes.post('/cities', CitiesController.store);
routes.get('/cities/:id', CitiesController.show);
routes.put('/cities/:id', CitiesController.update);
routes.delete('/cities/:id', CitiesController.delete);

export default routes;


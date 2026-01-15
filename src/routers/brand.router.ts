import { Router } from 'express';
import { Enviroment } from '../shared/application.enviroment';
import controller from '../controllers/brand.controller';

const routes: Router = Router();
const prefix = `/${Enviroment.basePath}/brands`;

routes.get(prefix, controller.findBrands);
routes.get(`${prefix}/:id`, controller.findBrandById);
routes.post(prefix, controller.create);
routes.put(`${prefix}/:id`, controller.update);
routes.delete(`${prefix}/:id`, controller.delete);

export default routes;

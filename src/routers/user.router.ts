import { Router } from 'express';
import { Enviroment } from '../shared/application.enviroment';
import controller from '../controllers/users.controller';

const routes: Router = Router();
const prefix = `/${Enviroment.basePath}/users`;

routes.get(prefix, controller.findUsers);
routes.get(`${prefix}/:email`, controller.findUser);
routes.post(prefix, controller.create);


export default routes;

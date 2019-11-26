import { Router } from 'express';
import { Enviroment } from '../shared/application.enviroment';
import controller from '../controllers/soccerTeam.controller';

const routes = Router();
const prefix = `/${Enviroment.basePath}/soccer-teams`;

routes.get(prefix, controller.findSoccerTeams);
routes.post(prefix, controller.create);

export default routes;
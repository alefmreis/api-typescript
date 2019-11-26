import { Router } from 'express';
import { Enviroment } from '../shared/application.enviroment';
import controller from '../controllers/soccerPlayer.controller';

const routes: Router = Router();
const prefix = `/${Enviroment.basePath}/soccer-players`;

routes.get(prefix, controller.findSoccerPlayers);
routes.post(prefix, controller.create);

export default routes;

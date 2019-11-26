import { Express } from 'express';
import userRouter from '../../routers/user.router';
import soccerPlayerRouter from '../../routers/soccerPlayer.router';
import soccerTeamRouter from '../../routers/soccerTeam.router';

class RouterLoader {
  load(server: Express): void {
    server.use(userRouter);
    server.use(soccerPlayerRouter);
    server.use(soccerTeamRouter);
  }
};

export default new RouterLoader();

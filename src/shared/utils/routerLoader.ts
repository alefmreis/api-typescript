import { Express } from 'express';
import userRouter from '../../routers/user.router';
import soccerPlayerRouter from '../../routers/soccerPlayer.router';

class RouterLoader {
  load(server: Express): void {
    server.use(userRouter);
    server.use(soccerPlayerRouter);
  }
};

export default new RouterLoader();

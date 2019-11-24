import { Express } from 'express';
import userRouter from '../../routers/user.router';

class RouterLoader {
  load(server: Express): void {
    server.use(userRouter);
  }
};

export default new RouterLoader();

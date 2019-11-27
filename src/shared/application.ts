import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routerLoader from './utils/routerLoader';
import mongoose from 'mongoose';
import database from '../shared/database/database';
import { Enviroment } from './application.enviroment';

class Application {
  public server: Express.Express;

  constructor() {
    this.server = Express();
  }

  private setApplicationDependecies(): void {
    this.server.use(bodyParser.json());
    this.server.use(cors());
    routerLoader.load(this.server);
  }

  private async connectDatabase(): Promise<void> {
    await mongoose.connect(Enviroment.databaseURI, Enviroment.databaseSettings);
    await database.connect();
  }

  public async init(): Promise<void> {
    await this.connectDatabase();
    this.setApplicationDependecies();    
    this.server.listen(4000, () => {
      console.log("Application running on port 4000");
    });
  }
}

export default Application;

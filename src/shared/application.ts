import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routerLoader from './utils/routerLoader';
import mongoose from 'mongoose';
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

  private connectDatabase(): void {
    mongoose.connect(Enviroment.databaseURI, Enviroment.databaseSettings);
  }
  
  public init(): void {
    this.setApplicationDependecies();
    this.connectDatabase();
    this.server.listen(4000, () => {
      console.log("Application running on port 4000");
    });
  }
}

export default Application;

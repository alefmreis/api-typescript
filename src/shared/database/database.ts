import { MongoClient, Db } from 'mongodb';
import { Enviroment } from '../application.enviroment';

let connection: MongoClient;

class Database {
  public static async connect(): Promise<void> {
    connection = await MongoClient.connect(Enviroment.databaseURI, Enviroment.databaseSettings);
  }

  public static async getDB(): Promise<Db> {
    if (!connection) {      
      throw new Error('Database is not connected');
    }
    return connection.db(Enviroment.databaseName);
  }
}

export default Database;
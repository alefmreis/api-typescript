import { MongoClient, Db } from 'mongodb';
import { Enviroment } from '../application.enviroment';

let connection: MongoClient;
let db: Db;

class Database {
  public static async connect(): Promise<void> {
    connection = await MongoClient.connect(Enviroment.databaseURI, Enviroment.databaseSettings);
    db = await connection.db(Enviroment.databaseName);
  }


  public static async getDB(): Promise<Db> {
    if (!connection) {
      throw new Error('Database is not connected');
    }

    return db;
  }
}

export { db };
export default Database;
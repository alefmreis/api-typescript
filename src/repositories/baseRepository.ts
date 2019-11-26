/* eslint-disable @typescript-eslint/no-explicit-any */
import { Db, Collection } from 'mongodb';

export class BaseRepository<T>{
  readonly _collection: Collection;

  constructor(private db: Db, readonly collectionName: string) {
    this._collection = db.collection(collectionName);
  }

  async create(data: T): Promise<any> {
    return this._collection.insertOne(data);
  }

  async update(query, data: T): Promise<any> {
    return this._collection.updateOne(query, { $set: data });
  }

  async find(query, options = { skip: 0, limit: 20 }): Promise<T[]> {
    return this._collection.find(query)
      .skip(options.skip)
      .limit(options.limit)
      .toArray();
  }

  async findOne(query): Promise<T | null> {
    return this._collection.findOne(query);
  }
}
import { IRead } from '../interfaces/IRead';
import { IWrite } from '../interfaces/IWrite';

// We can import some DB driver's table types to use in our repository. For now, I'll just imagine something on my own
type DBTable<T> = {
  name: string;
  insert: (item: T) => Promise<{result: {value: T, error?: string}}>;
  find: (item: T) => Promise<{result: {value: T, error?: string}}>;
}
// Exporting it just to be able to demo in PaymentProcessorRepository
export type DB = {
  table: (tableName: string) => DBTable<any>;
  drop: () => Promise<'ok' | 'error'>;
};

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T>{
  public readonly _table: DBTable<T>;

  constructor(db: DB, tableName: string) {
    this._table = db.table(tableName);
  }
  async create(item: T): Promise<boolean> {
    const result = await this._table.insert(item);
    return !!result.result.error;
  };

  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  };

  find(item: T): Promise<T[]> {
    throw new Error("Method not implemented.");
  };

  findOne(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  };

  update(id: string, item: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  };
  
}
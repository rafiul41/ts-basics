interface Database<K, T> {
  get(key: K): T;
  set(key: K, value: T): void;
}

interface Persistable<K, T> {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DbKeyType = string | number | symbol;

class InMemoryDb<K extends DbKeyType, T> implements Database<K, T> {
  // This property is protected otherwise the persistent db cannot access this property
  protected db: Record<K, T> = {} as Record<K, T>;
  get(key: K): T {
    return this.db[key];
  }
  set(key: K, value: T) {
    this.db[key] = value;
  }
}

// This class can return the state of db from one of the functions and can restore the state from a string
class PersistentDb<K extends DbKeyType, T> extends InMemoryDb<K, T> implements Persistable<K, T> {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    return this.db = JSON.parse(storedState);
  }
}
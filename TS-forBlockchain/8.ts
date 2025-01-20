interface SStroage<T> {
  [key: string]: T;
}

class LocalStroage<T> {
  private stroage: SStroage<T> = {};
  set(key: string, value: T) {
    this.stroage[key] = value;
  }
  remove(key: string) {
    delete this.stroage[key];
  }
  get(key: string): T {
    return this.stroage[key];
  }
  clear() {
    this.stroage = {};
  }
}

const stringsStroage = new LocalStroage<string>();

stringsStroage.get("key");

const booleanStorage = new LocalStroage<boolean>();

booleanStorage.get("xxx");

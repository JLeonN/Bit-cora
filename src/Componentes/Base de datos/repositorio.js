export default class Repositorio {
  constructor(nombre) {
    this.name = nombre;
    this.db = new Promise((resolve, reject) => {
      const openRequest = indexedDB.open(this.name);

      openRequest.onupgradeneeded = () => {
        const db = openRequest.result;
        this.crearAlmacenajeDeObjeto(db);
      };

      openRequest.onsuccess = () => {
        resolve(openRequest.result);
      };

      openRequest.onerror = () => {
        reject(openRequest.error);
      };
    });
  }

  async crearAlmacenajeDeObjeto(db) {
    if (!db.objectStoreNames.contains(this.name)) {
      db.createObjectStore(this.name, {
        keyPath: 'id',
        autoIncrement: true,
      });
    }
  }

  async guardar(informacion) {
    const db = await this.db;
    const store = db.transaction(this.name, 'readwrite').objectStore(this.name);
    const request = store.put(informacion);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  async obtenerPorClave(clave) {
    const db = await this.db;
    const store = db.transaction(this.name, 'readonly').objectStore(this.name);

    const request = store.get(clave);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  async borrarPorClave(clave) {
    const db = await this.db;
    const store = db.transaction(this.name, 'readwrite').objectStore(this.name);
    const request = store.delete(clave);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  async borrarTodo() {
    const db = await this.db;
    const store = db.transaction(this.name, 'readwrite').objectStore(this.name);
    const request = store.clear();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  async obtenerTodo() {
    const db = await this.db;
    const store = db.transaction(this.name, 'readonly').objectStore(this.name);
    const request = store.getAll();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }
}

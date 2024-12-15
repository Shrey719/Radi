// handles rootfs
export function initFS(dbName="fs", storeName="fs") {
    const request = indexedDB.open(dbName, 1);  
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
  
      db.createObjectStore(storeName, { keyPath: "id" });
    };
    request.onerror = (event) => {
      console.error("Error creating/opening the database:", event.target.error);
    };
  }
  

  export function setFS(dbName = "fs", storeName = "fs", key = "rootfs", jsonData) {
    return new Promise((resolve, reject) => {
        let request = indexedDB.open(dbName, 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: 'id' });
            }
        };

        request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction(storeName, "readwrite");
            const store = transaction.objectStore(storeName);

            const data = { id: key, value: jsonData };

            const putRequest = store.put(data);

            putRequest.onsuccess = () => {
                resolve();  
            };
            transaction.oncomplete = () => {
                db.close();
            };
        };

    });
}

export function getFS(dbName = "fs", storeName = "fs", key = "rootfs") {
    return new Promise((resolve, reject) => {
        let request = indexedDB.open(dbName, 1);

        request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction(storeName, "readonly");
            const store = transaction.objectStore(storeName);

            const getRequest = store.get(key);

            getRequest.onsuccess = () => {
                if (getRequest.result) {
                    resolve(getRequest.result.value);
                } else {
                    reject(new Error("Item not found"));
                }
            };

            getRequest.onerror = (event) => {
                reject(new Error("Error retrieving data: " + event.target.error));
            };

            transaction.oncomplete = () => {
                db.close();
            };
        };

        request.onerror = (event) => {
            reject(new Error("Error opening database: " + event.target.error));
        };
    });
}

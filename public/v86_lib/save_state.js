function saveStateful(buffer, dbName = 'stateful', storeName = 'state') {
    window.indexedDB.deleteDatabase(dbName);

    const request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = function(event) {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName);
      }
    };
  
    request.onsuccess = function(event) {
      const db = event.target.result;
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
        const blob = new Blob([buffer]);
      const addRequest = store.add(blob, 'stateful_files');
  
      addRequest.onsuccess = function() {
        console.log('ArrayBuffer successfully stored in IndexedDB.');
      };
  
      addRequest.onerror = function() {
        console.error('Error storing ArrayBuffer in IndexedDB.');
      };
    };
  
    request.onerror = function(event) {
      console.error('IndexedDB error:', event.target.error);
    };
  }
  

  function getStateful(dbName = 'stateful', storeName = 'state') {
    return new Promise((resolve, reject) => {
      // Open IndexedDB
      const request = indexedDB.open(dbName, 1);
  
      request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const getRequest = store.get('stateful_files');
  
        getRequest.onsuccess = function() {
          const blob = getRequest.result;
          
          if (blob) {
            const reader = new FileReader();
            reader.onloadend = function() {
              const arrayBuffer = reader.result;
              console.log('State retrieved from IndexedDB.');
              resolve(arrayBuffer); 
            };
            reader.readAsArrayBuffer(blob);
          } else {
            console.error('Stateful files could not be found!');
            reject(new Error('Stateful files not found'));
          }
        };
  
        getRequest.onerror = function() {
          console.error('Error retrieving ArrayBuffer from IndexedDB.');
          reject(new Error('Error retrieving ArrayBuffer from IndexedDB'));
        };
      };
  
      request.onerror = function(event) {
        console.error('IndexedDB error:', event.target.error);
        reject(new Error('IndexedDB error'));
      };
    });
  }
  
// Code below
const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof(Array)) ? 
        newCollection.slice() : Object.values(collection);

      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      };

      return collection;
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof(Array)) ? 
        newCollection.slice() : Object.values(collection);

      for (let i = 0; i < newCollection.length; i++) {
        newCollection[i] = callback(newCollection[i]);
      };

      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      const newCollection = (collection instanceof(Array)) ? 
        newCollection.slice() : Object.values(collection);

      let newAcc = (acc instanceof(Number)) ? acc : 0;

      for (let i = 0; i < newCollection.length; i++) {
        newAcc += callback(newCollection[i]);
      };

      return newAcc;

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()

//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Mongo = Package.mongo.Mongo;

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/dburles:mongo-collection-instances/mongo-instances.js                                             //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var instances = [];                                                                                           // 1
var orig = Mongo.Collection;                                                                                  // 2
                                                                                                              // 3
var spawner = function(name, options) {                                                                       // 4
  return spawn(name, options);                                                                                // 5
};                                                                                                            // 6
                                                                                                              // 7
var spawn = function(name, options) {                                                                         // 8
  Mongo.Collection = orig;                                                                                    // 9
  var instance = new Mongo.Collection(name, options);                                                         // 10
  instances.push({                                                                                            // 11
    name: name,                                                                                               // 12
    instance: instance,                                                                                       // 13
    options: options                                                                                          // 14
  });                                                                                                         // 15
  Mongo.Collection = spawner;                                                                                 // 16
  return instance;                                                                                            // 17
};                                                                                                            // 18
                                                                                                              // 19
Mongo.Collection = spawner;                                                                                   // 20
Meteor.Collection = spawner;                                                                                  // 21
                                                                                                              // 22
for (var property in orig) {                                                                                  // 23
  if (orig.hasOwnProperty(property))                                                                          // 24
    Mongo.Collection[property] = orig[property];                                                              // 25
}                                                                                                             // 26
                                                                                                              // 27
Mongo.Collection.get = function(name, options) {                                                              // 28
  options = options || {};                                                                                    // 29
  var collection = _.find(instances, function(instance) {                                                     // 30
    if (options.connection)                                                                                   // 31
      return instance.name === name &&                                                                        // 32
        instance.options && instance.options.connection._lastSessionId === options.connection._lastSessionId; // 33
    return instance.name === name;                                                                            // 34
  });                                                                                                         // 35
                                                                                                              // 36
  if (! collection)                                                                                           // 37
    throw new Meteor.Error("Collection not found");                                                           // 38
                                                                                                              // 39
  return collection.instance;                                                                                 // 40
};                                                                                                            // 41
                                                                                                              // 42
Mongo.Collection.getAll = function() {                                                                        // 43
  return instances;                                                                                           // 44
};                                                                                                            // 45
                                                                                                              // 46
if (Meteor.users) {                                                                                           // 47
  instances.push({                                                                                            // 48
    name: 'users',                                                                                            // 49
    instance: Meteor.users,                                                                                   // 50
    options: undefined                                                                                        // 51
  });                                                                                                         // 52
}                                                                                                             // 53
                                                                                                              // 54
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['dburles:mongo-collection-instances'] = {};

})();

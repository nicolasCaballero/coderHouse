// > show dbs
// admin    0.000GB
// config   0.000GB
// empresa  0.000GB
// local    0.000GB
// mibase   0.000GB
// prueba   0.000GB
// sistema  0.000GB

// > use empresa
// switched to db empresa
// > show collections
// articulos
// clientes

// > db.clientes.find()
// { "_id" : ObjectId("60abc7e9675e5a9b6ae2763e"), "nombre" : "Nicolas", "edad" : 27 }
// { "_id" : ObjectId("60abc828675e5a9b6ae2763f"), "nombre" : "Karen", "edad" : 26 }
// { "_id" : ObjectId("60abc828675e5a9b6ae27640"), "nombre" : "Leonardo", "edad" : 31 }
// { "_id" : ObjectId("60abc828675e5a9b6ae27641"), "nombre" : "Jeronimo", "edad" : 30 }

// > db.clientes.insert([{nombre: "Pablo", edad: 25}, {nombre: "Juan", edad: 22}, {nombre: "Lucia", edad: 25}, {nombre: "Juan", edad: 29}, {nombre: "Fede", edad: 35}])
// BulkWriteResult({
//         "writeErrors" : [ ],
//         "writeConcernErrors" : [ ],
//         "nInserted" : 5,
//         "nUpserted" : 0,
//         "nMatched" : 0,
//         "nModified" : 0,
//         "nRemoved" : 0,
//         "upserted" : [ ]
// })

// > db.clientes.find().sort({edad: -1})
// { "_id" : ObjectId("60abcaef4c25f4e7d813a270"), "nombre" : "Fede", "edad" : 35 }
// { "_id" : ObjectId("60abc828675e5a9b6ae27640"), "nombre" : "Leonardo", "edad" : 31 }
// { "_id" : ObjectId("60abc828675e5a9b6ae27641"), "nombre" : "Jeronimo", "edad" : 30 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26f"), "nombre" : "Juan", "edad" : 29 }
// { "_id" : ObjectId("60abc7e9675e5a9b6ae2763e"), "nombre" : "Nicolas", "edad" : 27 }
// { "_id" : ObjectId("60abc828675e5a9b6ae2763f"), "nombre" : "Karen", "edad" : 26 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26c"), "nombre" : "Pablo", "edad" : 25 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26e"), "nombre" : "Lucia", "edad" : 25 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26d"), "nombre" : "Juan", "edad" : 22 }

// > db.clientes.find().sort({edad: 1}).limit(1)
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26d"), "nombre" : "Juan", "edad" : 22 }

// > db.clientes.find().sort({edad: 1}).skip(1).limit(1)
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26c"), "nombre" : "Pablo", "edad" : 25 }

// > db.clientes.find({nombre: {$eq: "Juan"}})
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26d"), "nombre" : "Juan", "edad" : 22 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26f"), "nombre" : "Juan", "edad" : 29 }

// > db.clientes.find({$and: [{nombre: {$eq: "Juan"}}, {edad: {$eq: 29}}]})
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26f"), "nombre" : "Juan", "edad" : 29 }

// > db.clientes.find({$or: [{nombre: "Juan"}, {nombre: "Lucia"}]})
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26d"), "nombre" : "Juan", "edad" : 22 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26e"), "nombre" : "Lucia", "edad" : 25 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26f"), "nombre" : "Juan", "edad" : 29 }

// > db.clientes.find({edad: {$gt: 25}})
// { "_id" : ObjectId("60abc7e9675e5a9b6ae2763e"), "nombre" : "Nicolas", "edad" : 27 }
// { "_id" : ObjectId("60abc828675e5a9b6ae2763f"), "nombre" : "Karen", "edad" : 26 }
// { "_id" : ObjectId("60abc828675e5a9b6ae27640"), "nombre" : "Leonardo", "edad" : 31 }
// { "_id" : ObjectId("60abc828675e5a9b6ae27641"), "nombre" : "Jeronimo", "edad" : 30 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26f"), "nombre" : "Juan", "edad" : 29 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a270"), "nombre" : "Fede", "edad" : 35 }

// > db.clientes.find({edad: {$lte: 25}})
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26c"), "nombre" : "Pablo", "edad" : 25 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26d"), "nombre" : "Juan", "edad" : 22 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26e"), "nombre" : "Lucia", "edad" : 25 }

// > db.clientes.find({edad: {$ne: 25}})
// { "_id" : ObjectId("60abc7e9675e5a9b6ae2763e"), "nombre" : "Nicolas", "edad" : 27 }
// { "_id" : ObjectId("60abc828675e5a9b6ae2763f"), "nombre" : "Karen", "edad" : 26 }
// { "_id" : ObjectId("60abc828675e5a9b6ae27640"), "nombre" : "Leonardo", "edad" : 31 }
// { "_id" : ObjectId("60abc828675e5a9b6ae27641"), "nombre" : "Jeronimo", "edad" : 30 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26d"), "nombre" : "Juan", "edad" : 22 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26f"), "nombre" : "Juan", "edad" : 29 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a270"), "nombre" : "Fede", "edad" : 35 }

// > db.clientes.updateOne({nombre: "Fede"}, {$set: {edad: 36}})
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

// > db.clientes.updateMany({edad: 25}, {$set: {edad: 26}})
// { "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }

// > db.clientes.deleteOne({nombre: "Juan"})
// { "acknowledged" : true, "deletedCount" : 1 }

// > db.clientes.find()
// { "_id" : ObjectId("60abc7e9675e5a9b6ae2763e"), "nombre" : "Nicolas", "edad" : 27 }
// { "_id" : ObjectId("60abc828675e5a9b6ae2763f"), "nombre" : "Karen", "edad" : 26 }
// { "_id" : ObjectId("60abc828675e5a9b6ae27640"), "nombre" : "Leonardo", "edad" : 31 }
// { "_id" : ObjectId("60abc828675e5a9b6ae27641"), "nombre" : "Jeronimo", "edad" : 30 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26c"), "nombre" : "Pablo", "edad" : 26 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26e"), "nombre" : "Lucia", "edad" : 26 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26f"), "nombre" : "Juan", "edad" : 29 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a270"), "nombre" : "Fede", "edad" : 36 }

// > db.clientes.deleteOne({nombre: "Juan"})
// { "acknowledged" : true, "deletedCount" : 1 }

// > db.clientes.find()
// { "_id" : ObjectId("60abc7e9675e5a9b6ae2763e"), "nombre" : "Nicolas", "edad" : 27 }
// { "_id" : ObjectId("60abc828675e5a9b6ae2763f"), "nombre" : "Karen", "edad" : 26 }
// { "_id" : ObjectId("60abc828675e5a9b6ae27640"), "nombre" : "Leonardo", "edad" : 31 }
// { "_id" : ObjectId("60abc828675e5a9b6ae27641"), "nombre" : "Jeronimo", "edad" : 30 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26c"), "nombre" : "Pablo", "edad" : 26 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a26e"), "nombre" : "Lucia", "edad" : 26 }
// { "_id" : ObjectId("60abcaef4c25f4e7d813a270"), "nombre" : "Fede", "edad" : 36 }
// >
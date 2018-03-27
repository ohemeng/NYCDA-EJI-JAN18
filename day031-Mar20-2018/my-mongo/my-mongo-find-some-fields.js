//Return the fields "name" and "address" of all documents in the customers collection:

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://testuser:password@ds117729.mlab.com:17729/adu-mongo";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("adu-mongo");
  dbo.collection("customers").find({}, { _id: 1, name: 0, address: 1 }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
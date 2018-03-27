var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://testuser:password@ds117729.mlab.com:17729/adu-mongo";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("adu-mongo");
  dbo.collection("customers").find().limit(3).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
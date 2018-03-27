//var MongoClient = require('mongodb').MongoClient;
var MongoClient = require('mongodb');
var url = "mongodb://testuser:password@ds117729.mlab.com:17729/adu-mongo";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("adu-mongo");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

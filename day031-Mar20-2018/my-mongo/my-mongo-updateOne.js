var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://testuser:password@ds117729.mlab.com:17729/adu-mongo";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("adu-mongo");
  var myquery = { name: "Walmart", address: "route 18N" };
  var newvalues = { $set: {name: "Walmart", address: "Route 9S" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
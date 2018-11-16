var MongoClient = require('mongodb').MongoClient;
var startUrl = "mongodb://localhost:27017/EmployeeDB";
var url = "mongodb://localhost:27017/";


main();

async function main(){
 await insert();
 //await createDbAndCollection();
 //await createCollection();
}

async function find (){
    await MongoClient.connect(url, function(err, db) {

        var cursor = db.collection('Employee').find();
    
        cursor.each(function(err, doc) {
    
            console.log(doc);
    
        });
    }); 
}

async function insert() {
    await MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("EmployeeDB");
        var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("customers").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
}

async function createDb(){
    MongoClient.connect(url, { useNewUrlParser: true } , function(err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
      });
}

async function createCollection(){
    MongoClient.connect(url, { useNewUrlParser: true } , function(err, db) {
        if (err) throw err;
        var dbo = db.db("EmployeeDB");
        dbo.createCollection("customers", function(err, res) {
          if (err) throw err;
          console.log("Collection created!");
          db.close();
        });
      });
}
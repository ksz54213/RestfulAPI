// 宣告會用到的東西
var MongoClient = require('mongodb').MongoClient
    , Server = require('mongodb').Server
    , option = {atuo_reconnection : true, poolSize: 10};

// Server 設定
var MongoClient = new MongoClient(new Server('192.168.33.10',3030,option));

// open connection
MongoClient.open(function(err,MongoClient){
    var db1 = MongoClient.db("testDB");

    if(!err){
        console.log("Connected!");
    }
    MongoClient.close();
    console.log("Closed");
});
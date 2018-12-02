var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('Hello World ');
});

app.listen(3000,function(){
    console.log('Listen on port 192.168.33.10:3000');
});

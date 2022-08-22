const express = require('express');
const app = express();

app.listen(30080, function(){
    console.log("Start Server, port : 30080")
});

app.use(express.static(__dirname + '/out'));

app.get('/', function(req, res){
    res.sendfile(__dirname + "/out/index.html");
});

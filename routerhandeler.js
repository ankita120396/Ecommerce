var exp = require('express');

var app = exp();

app.listen(8100, function() {
     console.log("server started on port 8100");
});

app.get('/home',function(req,res){
     res.send("<h2> welcome to web page </h2>");
});


app.all('/*',function(req,res){
      res.send("Invalid URL");	
});


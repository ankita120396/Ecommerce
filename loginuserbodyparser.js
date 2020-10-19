var exp = require('express');
var bodyParser = require('body-parser');

var app = exp();
app.use(bodyParser.urlencoded({'extended':false}));


app.get('/user.html',function(req,res){
     res.sendFile(__dirname+"/user.html");
});

app.post('/userlogin',function(req,res){
     if(req.body.id == "ankita" && req.body.pwd == "1234")
     {
         res.send("Succesful login");
         
        // res.redirect('/welcome');
     }
     else
	 res.send("Failed login");
});

app.all('/welcome',function(req,res){
     if(req.query.id)
         res.send("<h1> WELCOME "+req.query.id+"</h1>");
     else
	 res.send("<h1> WELCOME GUEST </h1>");
});


app.listen(8100, function(req,res){
    console.log('server started at 8100');
});
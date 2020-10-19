var exp = require('express');

var app = exp();

app.listen(8100,function(){
     console.log("server stsrted at 8100");
});
app.get('/user.html',function(req,res){
     res.sendFile(__dirname+'/user.html');
});

app.get('/userlogin',function(req,res){
     //res.send("<h1> WELCOME "+req.query.id+"</h1>");
          if(req.query.id=="ankita" && req.query.pwd=="know-it")
             {res.send("successfull login");}
           else
	   {res.send("failed login");}
});

app.get('/user/:id/:pwd',function(req,res){
     res.send("USER ID IS:"+req.params.id+" and USER PASSWORD IS: "+req.params.pwd );
});

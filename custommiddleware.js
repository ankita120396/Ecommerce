var exp = require('express');

var app = exp();

app.use(function(req,res,next){
    console.log("in logging middleware");
    next();
});

app.use('/login',function(req,res,next){
    console.log("in encrypt - decrypt middleware");
    next();
})

app.get('/home',function(req,res){
    res.send("Home Page");
});

app.all('/*',function(req,res){
    res.send("Sorry, INVALID URL");
});

app.listen(8100,function(){
    console.log("Server started on port 8100");
});

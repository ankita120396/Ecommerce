var exp = require('express');
var cookieParser = require('cookie-parser');

var app = exp();
app.use(cookieParser());

app.get('/create',function(req,res){
    res.cookie("msg","Hello Cookie");
    res.send("Cookie is created <br/> <a href='view'> View Cooie </a>");
});

app.get('/view',function(req,res){
    if(req.cookies.msg)
         res.send("Cookie Value : "+req.cookies.msg);
    else
	res.send("Cookie not available");
});

app.get('/delete',function(req,res){
     res.clearCookie("msg");
     res.send("cookie deleted <br/> <a href='view'> Verify? </a>");
});


app.listen(8100, function(req,res){
    console.log('server started at 8100');
});
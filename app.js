var express = require('express');
var app = express();

/*
app.get("/hello.txt", function(req, res)
{
	var body = "Hello World!";
	res.setHeader("Content-Type","text/plain");
	res.setHeader("Content-Length","body.length");
	res.end(body);
});

*/
app.get("*", function(req, res)
{
	res.send("<html><head><title>Node and Express Test</title></head><body><h1>Hello World</h1></body></html>");
});


app.listen(3000);
console.log("Listening on port 3000");
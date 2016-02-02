var express = require("express");
var app = express();
var FizzBuzz = require("./fizzbuzz");
var CacheFizzBuzz = require("./cachefizzbuzz");

app.get("/", function(req, res) {
  res.send("Modify the URL to include the function and the parameters, e.g. http://sandbox-fizzbuzz.au-syd.mybluemix.net/fizzbuzz_range/:from/:to\n");
});

app.get("/fizzbuzz_range/:from/:to", function(req, res) {
  var cachefizzbuzz = new CacheFizzBuzz(dbURL);
  var from = req.params.from;
  var to = req.params.to;

  cachefizzbuzz.fizzBuzzRange(from, to, function(data) {
    res.send(data);
  });
});

var server_port = process.env.VCAP_APP_PORT || 3000;
var server_host = process.env.VCAP_APP_HOST || "localhost";
var dbURL = "";

if (process.env.VCAP_SERVICES) {
  var env = JSON.parse(process.env.VCAP_SERVICES);
  dbURL = env.cloudantNoSQLDB[0].credentials.url + "/fizzbuzz";
}
else dbURL = "http://localhost:5984/fizzbuzz";

var server = app.listen(server_port, server_host, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

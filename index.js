var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json()); // for parsing application/json

var pc = require('./pc')

var allMethods = ['rank', 'count', 'list'];
function produce(args){
  var args = args || {};
  var method = args.action || 'all';
  var string = args.string || 'asc';

  var methods = (method=='all' || allMethods.indexOf(method)<0) ? allMethods : [method];

  var output = {/*input:args*/};
  methods.map(function (method) {
    output[method] = pc(string)[method]();
  })
  return output;
}

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
// app.use(express.bodyParser());
app.get('/', function(request, response) {
  var a = [request.query,request.body,request.params,request.path,request.hostname];
  console.log('-----------------',JSON.stringify(a));
  response.send(JSON.stringify(produce(Object.keys(request.body).length !== 0 ? request.body : request.query)));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

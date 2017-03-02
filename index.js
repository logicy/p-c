var express = require('express')
var app = express()
var pc = require('./pc')

var allMethods = ['rank', 'count', 'list'];
function produce(args){
  var args = args || {};
  var method = args.action || 'all';
  var string = args.string || '';

  var methods = (method=='all' || allMethods.indexOf(method)<0) ? allMethods : [method];

  var output = {input:args};
  methods.map(function (method) {
    output[method] = pc(string)[method]();
  })
  return output;
}

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(JSON.stringify(produce(request.body)));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

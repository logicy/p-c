/*
* @Author: Sushil Jain
* @Date:   2017-02-28 13:09:11
* @Last Modified by:   sushiljainam
* @Last Modified time: 2017-02-28 14:59:03
*/

'use strict';
var api = require('./pc');
var allMethods = ['rank', 'count', 'list'];
var args = process.argv;

var method = args[2] || 'all';
var string = args[3] || '';


var methods = (method=='all' || allMethods.indexOf(method)<0) ? allMethods : [method];

methods.map(function (method) {
	console.log(method, ':', JSON.stringify(api(string)[method]()));
})


// node try.js '["rank","sushil"]'
// node try.js '["rank","sushil"]' '["list","noor"]'
// node try.js ["rank","sushil"] ["list","noor"]
// node try.js ['rank','sushil'] ['list','noor']
// npm try rank sushil
// npm try list sushil

/*
* @Author: Sushil Jain
* @Date:   2017-02-24 11:52:20
* @Last Modified by:   sushiljainam
* @Last Modified time: 2017-02-27 19:11:33
*/

'use strict';
var fx = require('./functions');
fx.rank = fx.findRankByString;
fx.count = fx.permuteOver;
fx.list = fx.listCombName;

const
	TYPEOF_NUM = 'number',
	TYPEOF_OBJ = 'object';

var ObjPC = function (string, opts) {
	if(arguments.length<1){
		var string = '';
	}
	var string = string || '';

	//check if string is an array, store it elsewhere, make it string
	
	var sLen = string.length;
	var opts = opts || {};
	if(typeof opts === TYPEOF_NUM){
		sLen = opts;
		opts = undefined;
	} else if (typeof opts === TYPEOF_OBJ){
		sLen = opts.length || sLen;
	} else {
		opts = undefined;
	}

	// return this;
	return new ResultPC(sLen, string, opts);
}

var ResultPC = function (len, string, opts) {
	var res = this;
	res.name = 'ResultPC';
	res.len = len;
	res.string = string;
	res.opts = opts;
	res.arrIndex = res.arrIndex || 0;
	return res;
}

ObjPC.permute = function(string, opts) {
	//return this(filtered args)
	return this(string, opts);
};

ObjPC.names = function(string, opts) {
	//return this(filtered args)
	return this(string, opts);
};

ResultPC.prototype.count = function(opts) {
	//return number
	return fx.count(this.string);
};

ResultPC.prototype.rank = function(opts) {
	//return number
	return fx.rank(this.string);
};

ResultPC.prototype.list = function(opts) {
	//return array
	return fx.list(this.string);
};

exports = module.exports = ObjPC;
/*
* @Author: Sushil Jain
* @Date:   2017-02-24 11:52:20
* @Last Modified by:   sushiljainam
* @Last Modified time: 2017-02-24 19:17:54
*/

'use strict';

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

	return res;
}

ObjPC.permute = function(string, opts) {
	//return ResultPC
};

ObjPC.names = function(string, opts) {
	//return ResultPC
};

ResultPC.prototype.count = function(opts) {
	//return number
};

ResultPC.prototype.rank = function(opts) {
	//return number
};

ResultPC.prototype.list = function(opts) {
	//return array
};

exports = module.exports = ObjPC;
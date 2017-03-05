/*
* @Author: Sushil Jain
* @Date:   2017-02-27 18:38:23
* @Last Modified by:   sushiljainam
* @Last Modified time: 2017-02-28 15:00:08
*/

'use strict';

module.exports.findRankByString = function (input) {
	var mexp = this;
	input = input.toLowerCase();
	if (input.length<=1) {
		return 1;
	};

	var charsName = [];
	charsName = Array.from(input);
	// for (var i = 0; i < input.length; i++) { //Array.from(input)
	// 	charsName.push(input[i]);
	// };

	// console.log(charsName);
	
	var sortedChars = [];

	sortedChars = Array.from(input).sort();
	// sortedChars = copyArray(charsName);
	// for (var i = 1; i < charsName.length; i++) { //Array.from('sushil').sort()
	// 	for (var j = i; j > 0; j--) {
	// 		if (sortedChars[j-1]>sortedChars[j]) {
	// 			var t = sortedChars[j];
	// 			sortedChars[j] = sortedChars[j-1];
	// 			sortedChars[j-1] = t;
	// 		};
	// 	}
	// };

	// console.log(charsName);
	// console.log(sortedChars);

	var output = findPartialByCharsSorted(charsName, sortedChars);
	return output+1;

	function findPartialByCharsSorted (chars, sortedChars, combSumInit) {
		var tChar = chars[0];
		var combSum = combSumInit || 0;
		var len = sortedChars.length;
		if (len<=0) {return combSum};

		for (var j = 0; j < len; j++) {
			// console.log('loop1')
			var doneChars = [];
			for (var i = 0; i < sortedChars.length; i++) {
				// console.log('loop2')
				if(tChar == sortedChars[i]) { //includes, indexOf
					chars.splice(0, 1); // Array.shift()
					sortedChars.splice(i, 1);
					// console.log(chars, sortedChars, combSum, doneChars)
					return findPartialByCharsSorted(chars, sortedChars, combSum);
					// break;
				} else if ( doneChars.indexOf(sortedChars[i])<0 ){
					var temp = copyArray(sortedChars);
					temp.splice(i,1);
					// console.log('-->',combSum, doneChars);
					combSum += mexp.permuteOver(temp);
					doneChars.push(sortedChars[i]);
				}
			};
		};
		// return combSum;
	}

}
module.exports.permuteOver = function (chars) {
	var n = chars.length;
	var freq = {};
	var deno = 1;
	if(n<=1) {return 1};
	for (var i = 0; i < chars.length; i++) {
		if (freq[chars[i]]) {
			freq[chars[i]]++;
		} else{
			freq[chars[i]] = 1;
		}
	};
	for(var key in freq) { //reduce, map
		if(freq[key]>1){
			deno *= factorial(freq[key]);
		}
	};
	return factorial(n)/deno;
}
module.exports.comb = function (len, states, rules){
	if(!len || len<1){return []}
	if(len>16){
		return "out of limit, put force if you know better";
	}
	var states = states || ["0","1"];
	var pos = [];
	var powers = [];
	pos = Array(len).fill(0);
	// for (var i = 0; i < len; i++) { //Array(len).fill(0) 
	// 	pos.push(0);
	// };
	var rule = rules && rules[0];
	var ruleVal = 0;
	for (var i = 0; i < states.length; i++) {
		powers.push(Math.pow(len, i));
		if (!!rule) {
			ruleVal += rule[i]*powers[i];
		} else {
			ruleVal = rule;
		}
	};

	var shouldBreak, str;
	var output = [];
	do{
		shouldBreak = true;
		str = "";var s=0;
		for (var i = 0; i < len; i++) {
			str+= states[pos[i]];
			s+= powers[pos[i]];
		};
		// console.log('output',s, s==ruleVal, !ruleVal, str);
		// console.log('output', str);
		(!ruleVal || s==ruleVal) && output.push(str);
		for (var i = len-1; i >= 0; i--) {
			if(pos[i]<states.length-1){
				pos[i]++; break;
			}
			if(pos[i]<states.length){
				if (i==0) {
					shouldBreak = false; break;
				};
				pos[i]=0;
			}
		};
	}while(shouldBreak);
	return output;
}

module.exports.listCombName = function (s) {
	var mexp = this;
	if (!s||s.length<1) {return mexp.comb(0);};
	s = s.toLowerCase();
	var sortedChars = [];
	sortedChars[0] = s[0];

	var rules = [];
	var freq = rules[0] = [];

	sortedChars = Array.from(s).sort().filter(onlyUnique);
	// for (var i = 1,k=1; i < s.length; i++) {
	// 	if(sortedChars.indexOf(s[i])>=0) {continue;}
	// 	sortedChars[k++] = s[i];
	// 	for (var j = i; j > 0; j--) {
	// 		if (sortedChars[j-1]>sortedChars[j]) {
	// 			var t = sortedChars[j];
	// 			sortedChars[j] = sortedChars[j-1];
	// 			sortedChars[j-1] = t;
	// 		};
	// 	}
	// 	// console.log(sortedChars);
	// };
	for (var i = 0; i < sortedChars.length; i++) {
		freq[i] = freqInString(sortedChars[i], s);
	};
	function freqInString (c, s) {
		var r = 0;
		for (var i = 0; i < s.length; i++) {
			s[i] == c && r++;
		};
		return r;
	}
	// console.log(sortedChars, rules);
	return mexp.comb(s.length, sortedChars, rules);
}

function copyArray (arr) {
	var t = [];
	for (var i = 0; i < arr.length; i++) {
		t.push(arr[i]);
	};
	return t;
}

function charInArray (c, arr) { //Array.includes //Array.indexOf
	for (var i = 0; i < arr.length; i++) {
		if(c==arr[i]){
			return true;
		}
	};
}

function factorial(x) {
	if(x==0) {
		return 1;
	}
		return x * factorial(x-1);
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
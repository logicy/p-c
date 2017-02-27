/*
* @Author: Sushil Jain
* @Date:   2017-02-27 18:38:23
* @Last Modified by:   sushiljainam
* @Last Modified time: 2017-02-27 18:38:57
*/

'use strict';

module.exports.findRankByString = function (input) {
	input = input.toLowerCase();
	if (input.length<=1) {
		return 1;
	};

	var charsName = [];
	for (var i = 0; i < input.length; i++) { //Array.from(input)
		charsName.push(input[i]);
	};

	// console.log(charsName);
	
	var sortedChars = [];


	sortedChars = copyArray(charsName);
	for (var i = 1; i < charsName.length; i++) { //Array.from('sushil').sort()
		for (var j = i; j > 0; j--) {
			if (sortedChars[j-1]>sortedChars[j]) {
				var t = sortedChars[j];
				sortedChars[j] = sortedChars[j-1];
				sortedChars[j-1] = t;
			};
		}
	};

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
				} else if ( !charInArray(sortedChars[i], doneChars)){
					var temp = copyArray(sortedChars);
					temp.splice(i,1);
					// console.log('-->',combSum, doneChars);
					combSum += permuteOver(temp);
					doneChars.push(sortedChars[i]);
				}
			};
		};
		// return combSum;
	}

	function permuteOver (chars) {
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
}
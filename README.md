# p-c
permuations, combinations, rankName and lot more: (in development mode)
**all use cases not completed yet**

## Installation

```
npm install p-c
```
## Testing (after installing)

```
npm test
```
## Trying (after installing)

you can try as soon as you install the package with your own input. :smile:

```
npm try
npm try <method> <input-string>
npm try rank rohan
npm try count rohan
npm try all rohan
npm try list rohan
```

## Usage

```javascript
var pc = require('p-c');

pc('cab').list(); /* [ 'aaa', 'aab', 'aac', 'aba', 'abb', 'abc', 'aca', 'acb', 'acc', 'baa', 'bab', 'bac', 'bba',
  'bbb', 'bbc', 'bca', 'bcb', 'bcc', 'caa', 'cab', 'cac', 'cba', 'cbb', 'cbc', 'cca', 'ccb', 'ccc' ] */
pc(10).list(); // [ '00', '01', '10', '11' ]
pc(['a','b']).list(); /* [ 'aa', 'ab', 'ba', 'bb' ] */
pc(['c','b']).list(); /* [ 'bb', 'bc', 'cb', 'cc' ] */
pc('cacb').list(); /* [ 'aaaa', 'aaab', 'aaac', 'aaba', 'aabb', 'aabc', 'aaca', 'aacb', 'aacc', 'abaa', 'abab', 'abac',
 ... ,
 'cbbc', 'cbca', 'cbcb', 'cbcc', 'ccaa', 'ccab', 'ccac', 'ccba', 'ccbb', 'ccbc', 'ccca', 'cccb', 'cccc' ]
 81 permutations */

pc('cab').rank(); // 19
pc('cacb').rank(); // 61

pc('cab').count(); // 27 (= 3^3)
pc('cacb').count(); // 81 (= 3^4)

var result = pc.permute('cab'); // returns an object
result.count();
result.rank();

var result = pc('cab'); // returns an object
result.count();
result.rank();

//examples with length
pc('01', 3).list() // [ '000', '001', '010', '011', '100', '101', '110', '111' ]
pc('cbad', 2).list() // [ 'aa', 'ab', 'ac', 'ad', 'ba', 'bb', 'bc', 'bd', 'ca', 'cb', 'cc', 'cd', 'da', 'db', 'dc', 'dd' ]
```
## Notes

all 3: `pc(args)`, `pc.permute(args)` & `pc.name(args)` are equivalent

* args: param1
* args: param1, len(number)
* args: param1, opts(object)

* param1: string // string or convertible to string
* param1: array  // array of chars // joined using no seperator

## Advanced

```javascript
//examples with opts
pc('cbad', {length:2, sortChars:false}); // [ 'cc', 'cb', 'ca', 'cd', 'bc', 'bb', 'ba', 'bd', 'ac', 'ab', 'aa', 'ad', 'dc', 'db', 'da', 'dd' ]
pc('cbad', {length:2, repeatChars:false}); // [ 'ab', 'ac', 'ad', 'ba', 'bc', 'bd', 'ca', 'cb', 'cd', 'da', 'db', 'dc' ]
pc('cbad', {length:2, sortChars:false, repeatChars:false}); // [ 'cb', 'ca', 'cd', 'bc', 'ba', 'bd', 'ac', 'ab', 'ad', 'dc', 'db', 'da' ]
```


## Defaults

* repeatChars: true
* sortChars: true
* length: length of input string

## Examples explained in AMAP detail

AMAP: as much as possible :wink:

1. `var string = 'cab'; pc(string).list();`
	* will produce same result if `string = 'cba'` or `'abc'` or `'acb'` ..
	* Objective: get an array of all the permutations made by characters (sorted) of input `string`
	* process:
		* save length of string
		* find distinct characters, sort these
		* repeat is ON
		* push permutations of saved length in array, return it
* `var string = 'cab'; pc(string).rank();`
	* will **NOT** produce same result if `string = 'cba'` or `'abc'` or `'acb'` ..
	* Objective: find position of input `string` in such `list()`
	* notes:
		* other than string's length is not recommended
		* sortChars=false is highly discouraged, while `rank()`, BECAUSE you will get 1 always.

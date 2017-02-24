# p-c
permuations, combinations, rankName and lot more: npm module

## Installation

```
npm install p-c
```

## Usage

```
var pc = require('p-c');

pc('cab').list(); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
pc(10).list(); // [ '01', '10' ]
pc(['a','b']).list(); // [ 'ab', 'ba' ]
pc(['c','b']).list(); // [ 'bc', 'cb' ]
pc('cacb').list(); // [ 'abcc', 'acbc', 'accb', 'bacc', 'bcac', 'bcca', 'cabc', 'cacb', 'cbac', 'cbca', 'ccab', 'ccba' ]

pc('cab').rank(); // 5
pc('cacb').rank(); // 8

pc('cab').count(); // 6

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

all 3: pc(args), pc.permute(args) & pc.name(args) are equivalent

args: param1
args: param1, len(number)
args: param1, opts(object)

param1: string // string or convertible to string
param1: array  // array of chars // joined using no seperator
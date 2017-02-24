# p-c
permuations, combinations, rankName and lot more: npm module

## Installation

```
npm install p-c
```

## Usage

```
var pc = require('p-c');

pc('cab').list() // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
pc('cacb').list() // [ 'abcc', 'acbc', 'accb', 'bacc', 'bcac', 'bcca', 'cabc', 'cacb', 'cbac', 'cbca', 'ccab', 'ccba' ]

pc('cab').rank() // 5
pc('cacb').rank() // 8
```

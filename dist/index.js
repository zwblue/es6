'use strict';

var a = 1;
console.log(a);
var b = 3;
console.log(b);
var name = 'zw';
console.log(name);
var c = 2;
{
   var _c = 3;
}
console.log(c);

for (var i = 0; i < 10; i++) {
   console.log('循环体中:' + i);
}
console.log('循环体外:' + i);

for (var _i = 0; _i < 10; _i++) {
   console.log('循环体中:' + _i);
}
console.log('循环体外:' + i);

let a = 1;
console.log(a);
let b = 3;
console.log(b);
var name='zw';
console.log(name);
var c=2;
{
   let c=3;
}
console.log(c);

for(var i=0;i<10;i++){
console.log('循环体中:'+i);
}
console.log('循环体外:'+i);


for(let i=0;i<10;i++){
console.log('循环体中:'+i);
}
console.log('循环体外:'+i);
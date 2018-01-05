1
let [a1, b1 = 'jspang'] = ['技术胖', undefined]
console.log(a1 + b1)

2
let [a, b = 'jspang'] = ['技术胖', null]
console.log(a + b)

3
let {foo,bar} = {foo:'JSPang',bar:'技术胖'};
console.log(foo,bar)

4
let foo1;
({foo1}={foo1:'123456'});//会报错要加（）;
console.log(foo1)


5
const [a2,b2,c2,d2,e2,f2]=[{home:12345},{home:23444},{home:54443},{home:43231},{home:989},{home:87382}];
// const [a2,b2,c2,d2,e2,f2]='232332';
console.log(a2,b2,c2,d2,e2,f2);


6
function jspang(...arg){
    console.log(arg[0])
    console.log(arg[1])
    console.log(arg[2])
    // 就算方法中引用多了也不会报错
}
jspang(1,2)


7
let arr1=['www','jspang','com'];
//let arr2=arr1;
// let arr2=arr1;//也会改变原有的值
let arr2=[...arr1];//不会改变原有的值，数组可以，但对象好像不行
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr2);
console.log(arr1);


8
// 查找是否存在:
let jspang1='技术胖';
let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
console.log(blog.includes(jspang1));
console.log(blog.startsWith(jspang1));	
console.log(blog.endsWith(jspang1));


9
// 重复字符串
console.log('jspang|'.repeat(3));


10
// 进制转换
console.log(0B010101)
console.log(0o666)




11
// 数值型判断和转换
let a3= 11/4;
console.log(Number.isFinite(a3));//true
console.log(Number.isFinite('jspang'));//false
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false
// 是否是整数
let a4=123.1;
console.log(Number.isInteger(a4)); //false
console.log(Number.isInteger(123)); //true
// 整数与浮点数转换
let a5='9.18';
console.log(Number.parseInt(a5)); 
console.log(Number.parseFloat(a5));
// 整数最大安全范围，和最小安全范围
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
// 安全整数判断
let a8= Math.pow(2,53)-1;
console.log(Number.isSafeInteger(a8));//false



// json转变为数组
let  json = {
    '0': 'jspang',
    '1': '技术胖',
    '2': '大胖逼逼叨',
    length:3
}
console.log(json)
console.log(Array.from(json))

let arr3=Array.of(5,6,7,'技术胖',true);
console.log(arr3)



// 数组相关方法
// find:找到一个就退出
let arr4=[1,2,3,4,5,6,7,8,9];
console.log(arr4.find((val)=>{
    return val>5
}))

// fill:对数组进行填充
let arr5=[0,1,2,3,4,5,6,7,8,9];
arr5.fill('jspang',3,4);
console.log(arr5)

// for...of...对数组进行遍历
let arr6=['jspang','技术胖','大胖逼逼叨']
for (let item of arr6){
    console.log(item);
}

// 获取for...of... 的下标
for (let index of arr6.keys()){
    console.log(index);
}

// 同时获取下标和val值
for (let [index,val] of arr6.entries()){
    console.log(index+':'+val);
}

// entries的用法
let list=arr6.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);

// 为函数取一个默认值
function add(a,b=1){
    return a+b
}
console.log(add(3));
// 但不知道要给一个函数几个参数时，你可以用add.length来判断要输入多少个入参
console.log(add.length)


let json1 = {
    a:'jspang',
    c:'zw',
    d:'zy'
}
function fun1({a,b='jspang',c,d}){//直接能拿到json1各个对象的值;不用循环遍历的
    console.log(a,b,c,d);
}
fun1(json1);

//直接能拿到json1数组对应的值;不用循环遍历的
function fun(a,b,c){
    console.log(a,b,c);
} 
fun(...arr6);


// 判断对象是否包含某个key值
let obj={
    a:1,
    b:2
}
console.log('a' in obj);
console.log('c' in obj);

let arr8=['jspang','技术胖'];
// 判断数组的下标是否有值
console.log(1 in arr8);  // true
console.log(0 in arr8);  // true
console.log(2 in arr8);  // false   


//！！！ 数组的遍历方法
// forEach 自动省略为空的数组元素
arr6.forEach(element => {
        return element+'1';
});
console.log(arr6)
// 不知道什么用处？？？
arr6.filter((val)=>{
    return val+'3'
})
console.log(arr6)



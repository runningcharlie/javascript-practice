var a = "好奇代码";
var b = 100;

var result;

result = +a > 1 || b;
console.log("false && false:", false && false);
result = result - 200 < 0 && parseInt(a);
result = result || !result;

console.log(result);

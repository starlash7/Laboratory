let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 첫째 줄의 데이터를 공백 기준으로 나누기
data = input[0].split(" ");
// data = ['1', '2']

a = Number(data[0]);
a = Number(data[1]);

console.log(a * b);

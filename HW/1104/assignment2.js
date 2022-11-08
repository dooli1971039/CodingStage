const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = parseInt(input[0]);

const sset=new Set();
for(let i=1;i<=n;i++) sset.add(input[i]);

let arr=[...sset]; //스프레드 연산자 써서 배열로 바꾸기
arr.sort((a,b)=>{
    return a.length - b.length || a.localeCompare(b);
});

arr.forEach((i)=>console.log(i));
"use strict";
let a = 10;
let b = 10;
let ans_add = add(a, b);
let ans_sub = sub(a, b);
console.log(ans_add);
console.log(ans_sub);
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
let names = ["RAJ", "ROY", "UKNOWN"];
names.map((name) => {
    //return `Current Name = ${name}`;
    console.log(name);
});

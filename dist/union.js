"use strict";
let x = 10;
x = "10";
console.log(x);
let arr = [1, 2, 3, "RAJ", "ROY"];
arr.map((item) => {
    console.log(item);
});
let arr2 = [["RAJ", 1], [2, "ROY"], [3, 4]];
arr2.map((item) => {
    item.map((subitem) => {
        console.log(subitem);
    });
});
let arr3 = [];
for (let i = 0; i < 10; i++) {
    arr3.push(i);
}
for (let i = 0; i < 10; i++) {
    console.log(arr3[i]);
}

let x : number | string = 10;
x = "10";
console.log(x);

let arr : Array<number | string> = [1, 2, 3, "RAJ", "ROY"];
arr.map((item : number | string) => {
    console.log(item);
});

let arr2 : Array<Array<number | string>> = [["RAJ", 1], [2, "ROY"], [3, 4]];

arr2.map((item : Array<number | string>) => {
    item.map((subitem : number | string) => {
        console.log(subitem);
    })
})

let arr3 : Array<number> = [];
for (let i = 0; i < 10; i++) {
    arr3.push(i);
}
for (let i = 0; i < 10; i++) {
    console.log(arr3[i]);
}


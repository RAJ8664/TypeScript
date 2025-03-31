let a = 10;
let b = 10;
let ans_add = add(a, b);
let ans_sub = sub(a, b);

console.log(ans_add);
console.log(ans_sub);

function add(a : number, b : number) : number {
    return a + b;
}

function sub(a : number, b : number) : number { 
    return a - b;
}

let names : Array<string> = ["RAJ", "ROY", "UKNOWN"];
names.map((name : string) => {
    //return `Current Name = ${name}`;
    console.log(name);
})




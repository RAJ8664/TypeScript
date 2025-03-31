let s : string = "Hello Raj";
let lowerCase : string = s.toLowerCase();
let upperCase : string = s.toUpperCase();
let len : number = s.length;
let first_char : string = s.charAt(0);

/* Just a Number not float , int .... */
let number1 : number = 10;
let number2 : number = 10.10;
let res : number = number1 + number2;
/* Type inference, no need to explictly write data type ---> number if we are assigning a value to it */
let number3 = 10;

/* boolean */
let flag : boolean = false;
if (flag == false) flag = !flag;

/* Any */
let obj : any = {first_name : "RAJ", last_name : "ROY", University : "NIT SILCHAR", cgpa : 7.38, isBackLog : false, Major : "Computer Science"};    
console.log(obj.first_name);
console.log(obj.last_name);
console.log(obj.University);

console.log(flag);
console.log(res);
console.log(first_char);
console.log(s);
console.log(lowerCase);
console.log(upperCase);
console.log(len);
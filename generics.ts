function print_number(input : number) : number {
    return input;
}

function print_string(input : string) : string {
    return input;
}

function print_boolean(input : boolean) : boolean {
    return input;
}

function print_any<T>(input : T) : T {
    return input;
}

let answer : number = print_any(1);
let answer2 : string = print_any("RAJ");
let answer3 : boolean = print_any(true);
console.log(answer);
console.log(answer2);
console.log(answer3);

let arrow_function = (input : number) : number => {
    return 0;
} 
let generic_arrow_function = <T>(input : T) : T => {
    return input;
}
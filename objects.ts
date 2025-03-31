const Hacker = {
    name : "RAJ",
    age : 22,
}

function CreateHacker(current_name : string, current_age: number) : {} {
    return {name : current_name, age : current_age};
}

const current_hacker = CreateHacker("RAJ", 22);
console.log(current_hacker);

type user = {
    Name : string;
    Age : number;
    Email : string;
    //for optional --> Email ?: string;
}

let user1 : user = {
    Name : "RAJ", Age : 21, Email : "rajr86642@gmail.com"
}


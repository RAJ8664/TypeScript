interface Userx {
    Name : string,
    Age : number,
    Email : string,
    Address : string,
    Phone : string,
}

let IUserx : Userx = {Name : "RAJ", Age : 21, Email : "r@gmail.com", Address : "India", Phone : "1234567890"};
console.log(IUserx.Name);
console.log(IUserx.Age);
console.log(IUserx.Email);
console.log(IUserx.Address);
console.log(IUserx.Phone);
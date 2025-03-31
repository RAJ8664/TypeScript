class User {
    //by default if data members access modifiers are not specified they are marked as public;
    Name : string;
    Age : number;
    Email : string;
    constructor(Name : string, Age : number, Email : string) {
        this.Name = Name;
        this.Age = Age;
        this.Email = Email;
    }

    //Getters;
    get getName() : string {
        return this.Name;
    }
    get getAge(): number {
        return this.Age;
    }
    get getEmail(): string {
        return this.Email;
    }

    //Setters;
    //No return Type --> not even void;
    set setName(newName : string) {
        this.Name = newName;
    }
    set setAge(newAge : number) {
        if (newAge <= 0) {
            throw new Error("Age should be greater than 0");
        }
        else this.Age = newAge;
    }
}

abstract class Person {
    public Name : string;
    public Age : number;
    constructor(Name : string, Age : number) {
        this.Name = Name;
        this.Age = Age;
    }

}

class Student extends Person {
    public Email : string;
    constructor(Name : string, Age : number, Email : string) {
        super(Name, Age);
        this.Email = Email;
    }
    get getEmail() : string {
        return this.Email;
    }
    set setEmail(newEmail : string) {   
        this.Email = newEmail;
    }
}

let p1 : Person = new Student("RAJ", 21, "r@gmail.com");
console.log(p1);

let CUser1 = new User("RAJ", 21, "R@gmail.com");
console.log(CUser1.Name);
console.log(CUser1.Age);
console.log(CUser1.Email);

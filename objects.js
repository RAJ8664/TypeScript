var Hacker = {
    name: "RAJ",
    age: 22,
};
function CreateHacker(current_name, current_age) {
    return { name: current_name, age: current_age };
}
var current_hacker = CreateHacker("RAJ", 22);
console.log(current_hacker);

var x = 10;
x = "10";
console.log(x);
var arr = [1, 2, 3, "RAJ", "ROY"];
arr.map(function (item) {
    console.log(item);
});
var arr2 = [["RAJ", 1], [2, "ROY"], [3, 4]];
arr2.map(function (item) {
    item.map(function (subitem) {
        console.log(subitem);
    });
});

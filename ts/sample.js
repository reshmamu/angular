var _num1 = 123;
//type annotation
var _str = "hello";
var _num3;
_num3 = 100.49;
console.log("type:", typeof _num3);
var X = [10, 20, 30];
X = 123;
console.log("type:", typeof X);
var condition = true;
console.log(condition);
var add = function (a, b) {
    return a + b;
};
console.log(add(12, 30));
function greetings(msg) {
    console.log("greetings:", msg);
}
greetings("hello");
var names = ["Rose", "Ria"];
names.push("anna");
names.push("athira");
console.log(names);
var names1 = names.filter(function (i) {
    if (i.startsWith("R")) {
        return i;
    }
});
console.log(names1);

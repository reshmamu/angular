function addition(i, j) {
    console.log(i, j);
}
addition(10, 100);
addition("hello", "world");
function getValues(x) {
    if (typeof (x) == "string") {
        console.log("message", x);
    }
    else {
        for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
            var e = x_1[_i];
            console.log(e);
        }
    }
}
getValues("hello all");
getValues(["a", "b", "c"]);
var values = [10, 11, 22, 13, 23]; //array declaration
var mapdary = values.map(function (x) {
    return Math.pow(x, 2);
});
var filterary = values.filter(function (x) {
    if (x % 2 == 0) {
        return Math.pow(x, 2);
    }
});
console.log(mapdary);
console.log(filterary);

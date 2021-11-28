function SumOfParameters() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    args.forEach(function (element) {
        sum += element;
    });
    return sum;
}
console.log(SumOfParameters(1, 2, 3, -6));

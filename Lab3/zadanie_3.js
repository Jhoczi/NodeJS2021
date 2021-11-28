// Przykladowe typy danych
var DataExamples = /** @class */ (function () {
    function DataExamples() {
        this.age = 21;
        this.firstName = "Janusz";
        this.recruitmentsIds = [1, 2, 3, 4, 5, 6];
        this.bookData = [1, "Lord of the Rings"];
    }
    return DataExamples;
}());
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var dataExample = new DataExamples();
console.log(dataExample);

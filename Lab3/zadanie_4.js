function PrintPerson(myPerson) {
    console.log(myPerson.firstName + " " + myPerson.lastName + " " + myPerson.age);
}
var obj = {
    firstName: "Antonio",
    lastName: "Seagun",
    age: 21
};
PrintPerson(obj);

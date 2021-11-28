interface IPerson
{
    firstName: string;
    lastName: string;
    age: Number;
}

function PrintPerson(myPerson: IPerson)
{
    console.log(`${myPerson.firstName} ${myPerson.lastName} ${myPerson.age}`);
}

let obj: IPerson = {
    firstName : "Antonio",
    lastName : "Seagun",
    age: 21
};

PrintPerson(obj);
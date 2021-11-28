// Przykladowe typy danych

class DataExamples
{
    public age:number = 21;
    public firstName: string = "Janusz";
    public recruitmentsIds: number[] = [1,2,3,4,5,6];
    public bookData: [number, string] = [1,"Lord of the Rings"];

}

enum Color 
{
    Red,
    Green,
    Blue
}

let dataExample = new DataExamples();
console.log(dataExample);
function SumOfParameters(...args: number[])
{
    let sum:number = 0;
    args.forEach( (element: number) => {
        sum += element;
    });
    return sum;
}

console.log( SumOfParameters(1,2,3,-6) );
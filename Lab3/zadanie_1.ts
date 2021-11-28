function Timer(counter:number) 
{
    console.log(counter);
    counter++;
    return counter;
}

let counter:number = 0;

setInterval(()=>{
    counter = Timer(counter);
    }
,1000);
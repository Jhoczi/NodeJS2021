function WriteLetterA( i )
{
    setTimeout(()=>{
        console.log('a');
    },10 * i);
}

function Timer()
{
    let n = 0;
    setInterval(()=>{
        n++;
        console.log(`Uplynelo: ${n} sekund.`);
        for (let i = 0; i < 5; i++)
        {
            WriteLetterA(i);
        }
    },1000);
}

Timer();

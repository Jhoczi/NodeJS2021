
function Timer()
{
    let i = 0;
    return new Promise((resolve)=>{
        resolve(
            setInterval(()=>
            {
                console.log(i);
                i++;
            },1000)
        );
    });
}

Timer().then(()=>{console.log("Koniec");});
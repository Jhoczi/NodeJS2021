setInterval(
    () => {
    console.log("SEKUNDA")
    for (let ms = 0;ms <= 50; ms+=10)
    {
        setTimeout(() => {
            console.log(`a - ${ms}`);
        },ms);
    } 
},1000);
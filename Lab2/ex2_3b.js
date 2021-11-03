const all = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'q', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const s = ['a','e','i','o','u','y'];
let i = 0;

all.forEach(element => { 
    setTimeout(
    ()=>{console.log(element);},500 + i);
    if (s.includes(element))
        i+=2000;
        else
        i+=500; 
});
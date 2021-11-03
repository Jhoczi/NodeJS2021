const all = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'q', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const s = ['a','e','i','o','u','y'];
let i = 0;
let p = 0;
const findCommonElement = (el,tab) => { return tab.includes(el) };

function Task(i,p) {
    setTimeout(() => {
        console.log(all[i]);
    },
        500 + p
   );
}


for (let i = 0;i<all.length;i++)
{
    if (findCommonElement(all[i],s))
        p += 2000;
    else
        p += 500;
    Task(i,p);
}




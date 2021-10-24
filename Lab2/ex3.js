const all = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'q', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const s = ['a','e','i','o','u','y'];
let i = 0;

const findCommonElement = (el,tab) => { return tab.includes(el) };

function Task(i) {
    let timer = 500;

    setTimeout(() => {
        console.log(all[i]);
        if (findCommonElement(all[i], s))
        {
            console.log("Tutaj powinien byc opozniony tick");
        }
    }, timer * i);
}


for (;i<all.length;i++)
{
    Task(i);
}




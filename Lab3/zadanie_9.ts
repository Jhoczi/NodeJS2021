async function LoadData()
{
    return new Promise<void>((resolve: any,reject: any) => {
        setTimeout( ()=> {resolve("A");}, 1000);
    });
}

async function Render()
{
    const data:any = await LoadData();
    return data;
}

let result = Render();
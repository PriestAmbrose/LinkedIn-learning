const delay = (seconds)=>
    new Promise((resolves)=>
    setTimeout(resolves,seconds*1000)
);
    const countToFive  = async ()=>{
        console.log("zero seconds");
        await delay(1);
        console.log("one second");
        await delay(1);
        console.log("one second");
        await delay(2);
        console.log("one second");
        await delay(1);
        console.log("one second");
        await delay(1);
        console.log("one second");
        await delay(4);
        console.log("one second");
    };

    countToFive();
    
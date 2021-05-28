let getSpacePeople = ()=>
fetch("http://api.open-notify.org/astros.json")
    .then((res)=>res.json());


    getSpacePeople().then(data => console.log(data));
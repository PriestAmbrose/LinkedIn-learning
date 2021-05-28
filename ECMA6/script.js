let getSpacePeople = ()=>
fetch("http://api.open-notify.org/astros.json")
    .then((res)=>res.json());


    let spaceName = ()=>
    getSpacePeople().then((json)=>json.people)
    .then((people)=>people.map((p)=>p.name))
    .then((names)=>names.join(", "));

    spaceName().then(console.log);
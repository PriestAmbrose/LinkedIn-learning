fetch("http://api.open-notify.org/astros.json")
.then((res)=>res.json())
.then(console.log);
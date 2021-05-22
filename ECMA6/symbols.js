const id = Symbol();

const courseInfo = {
    title:"Java Script",
    topics: ["strings", "arrays", "objects"],
    id: 3458
};

courseInfo[id]=4129;
console.log(courseInfo);
// there is no naming conflict
// use Symbol as a unique identifier to associate with an object
console.log(courseInfo[id], courseInfo.id);


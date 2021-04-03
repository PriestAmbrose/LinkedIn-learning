function addHeader(header){
    if (!document.body){
        const body = document.createElement("body");
        document.body = body;
        console.log(document.body);
    }
    document.body.innerHTML+=`<h1>${header}</h1>`
}
const addStyle = function(tag, color){
document.body.innerHTML+= `
<style> ${tag} {
    color:${color};
}
</style>
`
};
var doSmth = () => document.body.innerHTML+="<script src=\"script.js\"> hi</script>"


addHeader("Helllo");
addStyle("h1", "pink");
doSmth();
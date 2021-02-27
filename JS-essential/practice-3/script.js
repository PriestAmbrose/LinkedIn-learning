function addHeader(header){
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

const main = document.getElementsByTagName("h1")
const navbar = document.createElement("navbar")
navbar.innerHTML = "read login logout"
main[0].append(navbar)
const content = `
<ul>
    <li>Home</li>
    <li>Log in</li>
    <li>Log out</li>
    <li>About us</li>
    <li>Contact</li>
</ul>
`

document.body.innerHTML+=content
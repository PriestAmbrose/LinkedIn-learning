/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const element = document.getElementsByClassName("grid")[0];

element.addEventListener("mouseover",()=>element.style.border="1rem solid");
element.addEventListener("mouseout", ()=> element.style.border="");

let cells = document.getElementsByClassName("cell");
console.log(cells);
for (cell of cells){
    cell.addEventListener("mouseover",(e)=>{
        console.log(e.path[0]);
        e.path[0].style.backgroundColor="pink";    
    });
    cell.addEventListener("mouseout",(e)=>{
        console.log(e.path[0]);
        e.path[0].style.backgroundColor="";    
    });
    cell.addEventListener("click",(e)=>{
        console.log(e.path[0]);
        e.path[0].style.backgroundColor="green";    
    });
    //cell.addEventListener("mouseout",()=>cell.style["background-color"]="hsl(0%, 0%, 90%)");
    // cell.addEventListener("mouseover",()=>cell.style["background-color"]="hsl(90%, 0%, 90%)");
    // cell.addEventListener("mouseout",()=>cell.style["background-color"]="hsl(0%, 0%, 90%)");
}

document.addEventListener("keydown",(event)=>{
    event.path[1].style.backgroundColor= event.path[1].style.backgroundColor ? "":"black";
});
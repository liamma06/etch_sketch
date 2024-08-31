//grid and mouse
const grid = document.querySelector("#grid");
let mouseDown = false;
let eraserDown = false;
const sizeTag = document.querySelector("#currentSize");
createGrid(16);

function createGrid(gridSize){
    sizeTag.textContent= gridSize+" X "+gridSize;
    grid.innerHTML = ''; //clear exisitng
    for(row = 1; row <= gridSize; row++){

        for(col = 1; col <= gridSize; col++){
            const pixel = document.createElement("div");
            pixel.classList.add("square");

            var size = 700/gridSize;
            pixel.style.width = size+"px";
            pixel.style.height = size+"px";
            grid.appendChild(pixel);
            

            //Event listeners
            pixel.addEventListener("mouseenter",()=>{
                pixel.style.filter="brightness(85%)";
            });

            pixel.addEventListener("mouseleave",()=>{
                pixel.style.filter="brightness(100%)";
            });

            pixel.addEventListener("mousedown", ()=>{
                mouseDown = true;
                pixel.style.backgroundColor = colourValue;
            });

            pixel.addEventListener("mousemove", ()=>{
                if(mouseDown){
                    pixel.style.backgroundColor= colourValue;
                }
            });

            pixel.addEventListener("mouseup",()=>{
                mouseDown = false;
            });
        }
        
    }
}

//grid
const gridSize = document.querySelector("#gridSize");



gridSize.addEventListener("input",()=>{
    
    createGrid(gridSize.value);
    

});


//colour
const colour = document.querySelector("#colourPicker");
let colourValue = "black";

colour.addEventListener("input",()=>{
    colourValue = colour.value;
    
});

//Eraser
const eraser = document.querySelector("#eraser");

eraser.addEventListener("click",()=>{
    
    eraserDown = !eraserDown;  // Toggles the value between true and false
    console.log("Eraser toggled:", eraserDown);
    colourValue = eraserDown ? "white" : colour.value;  // If eraserDown is true, set colourValue to white, else set it to the current colour value
    eraser.style.filter = eraserDown ? "brightness(50%)" : "brightness(100%)";  // Adjust the brightness based on eraser state
});

//clear
const clear = document.querySelector("#clear");

clear.addEventListener("click",()=>{
    const squares = document.querySelectorAll(".square");
    squares.forEach(square =>{
        square.style.backgroundColor = "white";
    });
});




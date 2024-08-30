//grid and mouse
const grid = document.querySelector("#grid");
let mouseDown = false;

for(row = 0; row < 16; row++){

    for(col = 0; col < 16; col++){
        const pixel = document.createElement("div");
        pixel.classList.add("square");

        var size = 700/16;
        pixel.style.width = size+"px";
        pixel.style.height = size+"px";
        grid.appendChild(pixel);

        //colour
        const colour = document.querySelector("#colourPicker");
        let colourValue = "black"

        colour.addEventListener("input",()=>{
            colourValue=colour.value;
        });

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




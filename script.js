let currentClr=document.querySelector("#currentclr");
let color1=document.querySelector("#color1");
let color2=document.querySelector("#color2");
let box=document.querySelector(".box");


let bgGenerator=()=>{

    box.style.background=
    "linear-gradient(to top, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

    currentClr.textContent=box.style.background;
}

color1.addEventListener("input",bgGenerator);
color2.addEventListener("input",bgGenerator);
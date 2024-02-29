const parrafo = document.getElementById("key");
const main = document.getElementById("main");

function divRosado() {
    parrafo.style.backgroundColor = "pink"
}
function divCeleste() {
    parrafo.style.backgroundColor = "lightblue"
}
function divNaranja() {
    parrafo.style.backgroundColor = "orange"
}

document.addEventListener("keydown", function(event) {
   if (event.key === "a") {
    divRosado()
   }
   else if (event.key === "s") {
    divCeleste()
   }
   else if (event.key === "d") {
    divNaranja()
   }
})

function agregarDiv(color) {
    const nuevoDiv = document.createElement("div")
    nuevoDiv.classList.add("nuevo")
    nuevoDiv.style.backgroundColor = color
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height ="200px";
    main.appendChild(nuevoDiv);
    
}

document.addEventListener("keydown", function(event) {
    if (event.key === "q") {
     agregarDiv("purple")
    }
    else if (event.key === "w") {
     agregarDiv("grey")
    }
    else if (event.key === "e") {
     agregarDiv("brown")
    }
 })
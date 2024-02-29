const ele1 = document.getElementById("div1");
const ele2 = document.getElementById("div2");
const ele3 = document.getElementById("div3");
const ele4 = document.getElementById("div4");

const black = (e) => {
    e.target.style.backgroundColor = "black"
}

ele1.addEventListener("click", black)
ele2.addEventListener("click", black)
ele3.addEventListener("click", black)
ele4.addEventListener("click", black)
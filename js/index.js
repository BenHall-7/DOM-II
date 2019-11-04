// Your code goes here

let img1 = document.querySelector(".intro img");
let img2 = document.querySelector(".content-destination img");
let nav = document.querySelector(".nav");

function switch_img_src(event) {
    let src1 = img1.getAttribute("src");
    let src2 = img2.getAttribute("src");
    img1.setAttribute("src", src2);
    img2.setAttribute("src", src1);
    event.stopPropagation();
}

// 1: mouseover
img1.addEventListener("mouseover", switch_img_src);
img2.addEventListener("mouseover", switch_img_src);

// 2: scroll
document.addEventListener("scroll", (ev) => {
    document.querySelector("body").style.transform = "rotate("+scrollY / 180+"deg)";
    ev.stopPropagation();
})

// 3: click
document.querySelectorAll(".nav-link").forEach((nav_link) => nav_link.addEventListener("click", (ev) => {
    nav.removeChild(nav_link);
    ev.preventDefault();
}))

// 4: load
window.addEventListener("load", () => {
    window.alert("Why hello there");
})

// 5: doubleclick
document.querySelectorAll("p").forEach(p => p.addEventListener("dblclick", ev => {
    ev.target.style.background = "orange"
}));
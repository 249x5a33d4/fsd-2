function msg(){
    return "Messi – Greatest Ever";
}

function info(p){
    return p + " – Barça Legend";
}

let skill = (x) => x + " – Magic Maker";

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let out = document.getElementById("out");

b1.addEventListener("click", function(){
    let r1 = msg();
    let r2 = skill("Messi");
    out.innerText = r1 + " | " + r2;
});

b2.addEventListener("click", function(){
    let r = info("Xavi");
    out.innerText = r;
});

b3.addEventListener("click", function(){
    let r = skill("Iniesta");
    out.innerText = r;
});

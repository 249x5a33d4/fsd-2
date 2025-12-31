let t = document.getElementById("t1");
let b = document.getElementById("b1");
let p = document.getElementById("p1");
let h = document.getElementById("p2");
let i = document.getElementById("i1");
let s = document.getElementById("s1");
let st = document.getElementById("st");

b.addEventListener("click", function(){
    p.innerText = "Messi - G.O.A.T";
    
});

t.addEventListener("dblclick", function(){
    t.style.color = "red";
    
});

h.addEventListener("mouseover", function(){
    h.innerText = "Camp Nou";
    
});

h.addEventListener("mouseout", function(){
    h.innerText = "Hover to see";
    
});

i.addEventListener("keydown", function(){
    st.innerText = "Key Down";
});

i.addEventListener("keyup", function(){
    st.innerText = "Key Up";
});

i.addEventListener("focus", function(){
    i.style.border = "2px solid blue";
    
});

i.addEventListener("blur", function(){
    i.style.border = "1px solid black";
    
});

s.addEventListener("change", function(){
    st.innerText = s.value + " Picked";
});

document.addEventListener("contextmenu", function(){
    st.innerText = "Right Click";
});

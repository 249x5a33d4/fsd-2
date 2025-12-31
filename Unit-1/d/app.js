let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let st = document.getElementById("st");

b1.addEventListener("click", function(){
    st.innerText = "Messi clicked";
});

b1.addEventListener("dblclick", function(){
    st.innerText = "Messi double clicked";
});

b2.addEventListener("click", function(){
    st.innerText = "Xavi clicked";
});

b2.addEventListener("dblclick", function(){
    st.innerText = "Xavi double clicked";
});

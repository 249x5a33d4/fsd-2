function showPlayer(name) {
    document.getElementById("output").textContent = name + " is a Barça Legend";
}

const goals = function(a, b) {
    return a + b;
};

const rating = (n) => {
    return n * n;
};

function showGoals() {
    let r = goals(30, 25);
    document.getElementById("output").textContent = "Total Goals: " + r;
}

function showRating() {
    let r = rating(5);
    document.getElementById("output").textContent = "Player Rating: " + r;
}

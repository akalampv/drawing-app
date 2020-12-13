let swatches = document.querySelectorAll(".swatch");

let colors = ["black", "red", "yellow", "blue", "green", "purple", "white"];

for (let i = 0, n = colors.length; i < n; i++) {
    let swatch = document.createElement("div");
    swatch.className = "swatch";
    swatch.id = colors[i];
    if (i === 0) {
        swatch.className += " active";
    }
    document.querySelector("#colors").appendChild(swatch);
    swatch.addEventListener("click", setSwatch);
}

function setSwatch(e) {
    let color = e.target.id;
    context.fillStyle = color;
    context.strokeStyle = color;
    let active = document.querySelector(".active");
    active.className = "swatch";
    e.target.className += " active";
}

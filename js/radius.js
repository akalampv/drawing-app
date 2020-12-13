let minRadius = 5,
    maxRadius = 100,
    defaultRadius = 5,
    interval = 5,
    radiusSpan = document.querySelector("#radval"),
    decRad = document.querySelector("#decrease"),
    incRad = document.querySelector("#increase");

let setRadius = function (newRadius) {
    if (newRadius < minRadius) {
        newRadius = minRadius;
    } else if (newRadius > maxRadius) {
        newRadius = maxRadius;
    }
    radius = newRadius;
    context.lineWidth = 2 * radius;

    radiusSpan.innerHTML = radius;
}

decRad.addEventListener("click", function () {
    setRadius(radius - interval);
})

incRad.addEventListener("click", function () {
    setRadius(radius + interval);
})

setRadius(defaultRadius);

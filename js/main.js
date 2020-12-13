let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext("2d");

let radius = 5;
let dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius * 2;

let putPoint = function (e) {
    if (dragging) {
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        context.beginPath();
        context.arc(e.offsetX, e.offsetY, radius, 0, 2 * Math.PI);
        context.fill();
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY);
    }
}

let engage = function (e) {
    dragging = true;
    putPoint(e)
}

let disengage = function () {
    dragging = false;
    context.beginPath();
}

canvas.addEventListener("mousedown", engage);
canvas.addEventListener("mouseup", disengage);

canvas.addEventListener("mousemove", putPoint);


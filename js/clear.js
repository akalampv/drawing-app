const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
})

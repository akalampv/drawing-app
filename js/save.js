const saveBtn = document.querySelector("#save");

saveBtn.addEventListener("click", saveImg);

function saveImg() {
    let link = document.createElement("a");
    link.download = Date.now() + ".png";
    link.href = canvas.toDataURL();
    link.click();
    link.delete();
}

function eventOnClick () {
    if (document.getElementById('outline').innerHTML === "Menu") {
        document.getElementById('slider-body').style.display = "block";
        document.getElementById('outline').innerHTML = "Close"
    } else {
        document.getElementById('slider-body').style.display = "none";
        document.getElementById('outline').innerHTML = "Menu"
    }
}
document.getElementById('outline').addEventListener("click", eventOnClick, false);
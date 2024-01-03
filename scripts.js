const billAmount = document.getElementById("bill");
const quality = document.getElementById("quality");
const people = document.getElementById("people");
const form = document.getElementById("form");
const tip = document.getElementById("tip");



document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    calculateTip();
})


function calculateTip() {
    if (people.value > 1 && quality.value > 0) {
        tip.innerText = "$"+(Math.round(((billAmount.value * (quality.value / 100)) / people.value) * 100) / 100).toFixed(2);
        document.getElementById("totalTip").style.display = "flex";
        document.getElementById("each").style.display = "inline";
    } else {
        tip.innerText = "$"+(Math.round(((billAmount.value * (quality.value / 100)) / 1) * 100) / 100).toFixed(2);
        document.getElementById("totalTip").style.display = "flex";
        document.getElementById("each").style.display = "none";
    }
}

document.getElementById("totalTip").style.display = "none";
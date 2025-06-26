let totalPriceInput = document.getElementById("totalPriceInput").value;
let tipInput = document.getElementById("tipInput").value;
let output = document.getElementById("output");

function calculate() {

    let totalPriceInput = document.getElementById("totalPriceInput").value;
    let tipInput = document.getElementById("tipInput").value;
    let output = document.getElementById("output");

    if (totalPriceInput === "" && tipInput === "") {
        alert("Please enter your values!");
        return;
    } else if (isNaN(totalPriceInput) && isNaN(tipInput)) {
        alert("Please enter only numbers, not letters or words!");
        return;
    }

    output.innerHTML = `The total cost is ${totalPriceInput} + ${tipInput} dollars`;
}

function reset() {
    let totalPriceInput = document.getElementById("totalPriceInput").value;
    let tipInput = document.getElementById("tipInput").value;
    let reset = document.getElementById("reset").onclick;
    let output = document.getElementById("output");

    if(document.getElementById("reset").onclick) {
        document.getElementById("totalPriceInput").value = "";
        document.getElementById("tipInput").value = "";
        document.getElementById("output").innerHTML = "";
    } else if(reset.onclick()) {
        totalPriceInput === "";
        tipInput === "";
        output === "";
    }
}

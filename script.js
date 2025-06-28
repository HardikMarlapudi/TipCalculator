function calculate() {

    let totalPriceInput = document.getElementById("totalPriceInput").value;
    let tipInput = document.getElementById("tipInput").value;

    if (totalPriceInput === "" && tipInput === "") {
        alert("Please enter your values!");
        return;
    } else if (isNaN(totalPriceInput) && isNaN(tipInput) || isNaN(totalPriceInput) || isNaN(tipInput)) {
        alert("Please enter only numbers, not letters or words!");
        return;
    } else {
        let totalPriceInput = document.getElementById("totalPriceInput").value;
        let tipInput = document.getElementById("tipInput").value;
        let tipAmount = document.getElementById("tipAmount");
        let output = document.getElementById("output");

        output === totalPriceInput + tipInput;

        tipAmount.innerHTML = `Tip amount $${tipInput} dollars`;
        output.innerHTML = `The total price is $${parseFloat(totalPriceInput) + parseFloat(tipInput)} dollars`;
        return;
    }
}

function reset() {
    
    let totalPriceInput = document.getElementById("totalPriceInput").value;
    let tipInput = document.getElementById("tipInput").value;
    let reset = document.getElementById("reset").onclick;
    let output = document.getElementById("output");

    if(document.getElementById("reset").onclick) {
        document.getElementById("totalPriceInput").value = "";
        document.getElementById("tipInput").value = "";
        document.getElementById("tipAmount").innerHTML = "";
        document.getElementById("output").innerHTML = "";
    } else if(reset.onclick()) {
        totalPriceInput === "";
        tipInput === "";
        tipAmount === "";
        output === "";
    }
}

function calculate() {
    var green = document.getElementById("cfni-green").value;
    var yellow = document.getElementById("cfni-yellow").value;
    var red = document.getElementById("cfni-red").value;

    //hide the error and show the results
    if (red == "" || green == "" || yellow == "") {
        document.getElementById("cfni-error").innerHTML = "Error: please enter all values.";
        return;
    }

    green = parseInt(green);
    yellow = parseInt(yellow);
    red = parseInt(red);

    document.getElementById("cfni-error").innerHTML = "";

    // calculate total
    var total = green + yellow + red;
    document.getElementById("cfni-total").innerHTML = "Total amount of food in pounds: " + total;

    // calculate percentages
    document.getElementById("cfni-percent-label").innerHTML = "Percentages:";

    var green_percent = (green / total) * 100;
    document.getElementById("cfni-green-percent").innerHTML = "Green: " + green_percent.toFixed(1) + "%";

    var yellow_percent = (yellow / total) * 100;
    document.getElementById("cfni-yellow-percent").innerHTML = "Yellow: " + yellow_percent.toFixed(1) + "%";

    var red_percent = (red / total) * 100;
    document.getElementById("cfni-red-percent").innerHTML = "Red: " + red_percent.toFixed(1) + "%";

    // (From brief) Index = ((((0.7773 × Green) + (0.5923 × Yellow) + (0.3753 × Red)) − 37.53)/40.20) × 100
    //sample input: 1000, 580, 98
    //correct output: 78.3
    var index = ((((0.7773 * green_percent) + (0.5923 * yellow_percent) + (0.3753 * red_percent)) - 37.53) / 40.20) * 100;
    document.getElementById("cfni-index").innerHTML = "Index: " + index.toFixed(1);

}


window.addEventListener('DOMContentLoaded', (event) => {
    var calcForm = document.getElementById("cfni-calc-form");
    console.log(calcForm);

    calcForm.addEventListener("submit", function(e) {
        e.preventDefault();
        calculate();
        return false;
    ;});
});

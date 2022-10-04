function calculate() {
    var green = parseInt(document.getElementById("green").value);
    var yellow = parseInt(document.getElementById("yellow").value);
    var red = parseInt(document.getElementById("red").value);

    if (green < 0 || yellow < 0 || red < 0 ||(green == 0 && yellow == 0 && red == 0)) {
        //show the error
        document.getElementById("error").innerHTML = "Please enter valid values.";
        return;
    }

    //hide the error and show the results
    document.getElementById("error").innerHTML = "";

    // calculate total
    var total = green + yellow + red;
    document.getElementById("total").innerHTML = total;

    // calculate percentages
    document.getElementById("percent-label").innerHTML = "Percentages:";

    var green_percent = (green / total) * 100;
    document.getElementById("green-percent").innerHTML = "Green: " + green_percent.toFixed(1) + "%";

    var yellow_percent = (yellow / total) * 100;
    document.getElementById("yellow-percent").innerHTML = "Yellow: " + yellow_percent.toFixed(1) + "%";

    var red_percent = (red / total) * 100;
    document.getElementById("red-percent").innerHTML = "Red: " + red_percent.toFixed(1) + "%";

    // (From brief) Index = ((((0.7773 × Green) + (0.5923 × Yellow) + (0.3753 × Red)) − 37.53)/40.20) × 100
    //sample input: 1000, 580, 98
    //correct output: 78.3
    var index = ((((0.7773 * green_percent) + (0.5923 * yellow_percent) + (0.3753 * red_percent)) - 37.53) / 40.20) * 100;
    document.getElementById("index").innerHTML = "Index: " + index.toFixed(1);

}
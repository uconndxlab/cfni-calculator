function calculate() {
    var green = document.getElementById("cfni-green").value;
    var yellow = document.getElementById("cfni-yellow").value;
    var red = document.getElementById("cfni-red").value;
    var chart;

    //hide the error and show the results
    if (red == "" || green == "" || yellow == "") {
        document.getElementById("cfni-error").innerHTML = "Error: please enter all values.";
        document.getElementById("cfni-error").style.display = "block";
        return;
    }

    green = parseInt(green);
    yellow = parseInt(yellow);
    red = parseInt(red);

    document.getElementById("cfni-error").innerHTML = "";

    // calculate total
    var total = green + yellow + red;
    document.getElementById("cfni-results-title").innerHTML = "Total amount of food in pounds: " + total;

    // calculate percentages
    var green_percent = (green / total) * 100;
    var yellow_percent = (yellow / total) * 100;
    var red_percent = (red / total) * 100;

    // pie chart

    Chart.defaults.font.family = "Source Sans Pro";

    let labels = ["Green", "Yellow", "Red"];
    
    let itemData = [green_percent, yellow_percent, red_percent];

    let colors = ["#91ae42", "#f4dd62", "#e14b2b"];

    const data = {
        labels: labels,
        datasets: [{
            data: itemData,
            borderColor: "#000000",
            borderWidth: 1,
            backgroundColor: colors //green, yellow, red
        }]
    };

    const config = {
        type: "pie",
        data: data,
        options: {
            layout: {
                padding: {
                    left: 80,
                    right: 80
                    //bottom: 50
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                labels: {
                    render: function(context) {
                        //custom label for each part of the pie chart
                        return `${context.label}: ${context.value.toFixed(1)}%`;
                    },
                    position: "outside",
                    textMargin: 10,
                    font: {
                        size: 30,
                        color: "#000000"
                    }
                },
                title: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    };



    document.getElementById("cfni-results").style.display = "block";
    
    let chartStatus = Chart.getChart("cfni-pie-chart"); // <canvas> id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    chart = new Chart(document.getElementById("cfni-pie-chart"), config);

    

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

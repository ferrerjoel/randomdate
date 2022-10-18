const DATES_TO_GENERATE = 5;
var dates = [];
var sortedDates = [];
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var list;
function generateDates(){
    // We generate the dates
    for (var i = 0; i < DATES_TO_GENERATE; i++){
        dates[i] = new Date(new Date("2022-01-01").getTime() + Math.random() * (new Date("2022-12-31").getTime() - new Date("2022-01-01").getTime()));
    }
    dates.sort(function(a, b){return a - b});
    // Recover the dropdown menu value
    var e = document.getElementById("dropdown");
    var value = e.value;
    // We reorder the dates
    for (var i = 0; i < DATES_TO_GENERATE; i++){
        document.getElementById(`date${i+1}`).innerHTML = "Date " + (i+1) + ": " + dates[i].toLocaleDateString(value, options);
    }
}

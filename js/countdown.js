const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 8, 22).getTime();
const fourthOfJulyNextYear = new Date(year + 1, 8, 22).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function() {

    // get today's date
    const today = new Date().getTime();

    // get the difference
    let diff;
    if (month > 8) {
        diff = fourthOfJulyNextYear - today;
    } else {
        diff = fourthOfJuly - today;
    }




    // math
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // display
    document.getElementById("days").innerHTML = ((parseInt(days) < 10) ? "0" + days : days);
    document.getElementById("hours").innerHTML = ((parseInt(hours) < 10) ? "0" + hours : hours);
    document.getElementById("minutes").innerHTML = ((parseInt(minutes) < 10) ? "0" + minutes : minutes);
    document.getElementById("seconds").innerHTML = ((parseInt(seconds) < 10) ? "0" + seconds : seconds);
}, 1000);
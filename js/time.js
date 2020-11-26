window.onload = displayClock();
function displayClock() {


    var date = new Date();
    var minutes = (mins = ('0' + date.getMinutes()).slice(-2));
    var hours = date.getHours();
	var seconds = (secs = ('0' + date.getSeconds()).slice(-2));
    var separator = ':'

    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();


    var current_date = day + "." + month + "." + year;
    var time = hours + separator + minutes + separator + seconds;

    document.getElementById('time').innerText = time;
    document.getElementById('date').innerText = current_date;


    setTimeout(displayClock, 1000);
}

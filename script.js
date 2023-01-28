// Logic of our Clock App.

setInterval(() => {

    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");

    let date = new Date();
    let thour = date.getHours();
    let tminute = date.getMinutes();
    let tsecond = date.getSeconds();

    let hrotation = thour*30+tminute/2;
    let trotation = tminute*6;
    let srotation = tsecond*6;   

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${trotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);
   
// Ending of our  JavaScript Logic

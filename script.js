function openInvitation(){
    document.getElementById("opening").style.display = "none";
    document.getElementById("music").play();
}

const targetDate =
new Date("June 28, 2026 09:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();
const distance = targetDate - now;

document.getElementById("days").innerHTML =
Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById("hours").innerHTML =
Math.floor((distance % (1000 * 60 * 60 * 24))
/ (1000 * 60 * 60));

document.getElementById("minutes").innerHTML =
Math.floor((distance % (1000 * 60 * 60))
/ (1000 * 60));

document.getElementById("seconds").innerHTML =
Math.floor((distance % (1000 * 60))
/ 1000);

},1000);
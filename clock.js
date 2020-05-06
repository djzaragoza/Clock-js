const handSecond = document.querySelector(".second-hand");
const handMinute = document.querySelector(".min-hand");
const handHour = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const DegreeSec = (seconds / 60) * 360 + 90;
  const DegreeMin = (minutes / 60) * 360 + 90;
  const DegreeHour = (hours / 24) * 360 + 90;

  handSecond.style.transform = `rotate(${DegreeSec}deg)`;
  handMinute.style.transform = `rotate(${DegreeMin}deg)`;
  handHour.style.transform = `rotate(${DegreeHour}deg)`;

  //console.log(seconds);
}

setInterval(setDate, 1000);

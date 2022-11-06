months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sept",
  "oct",
  "nob",
  "dec",
];
days = ["sun", "mon", "tus", "weds", "thus", "fri", "sat"];

let today = new Date();
document.write(today);
let yy = today.getFullYear();
document.write("<br>");
document.write(yy);
let mm = today.getMonth();
document.write("<br>");
document.write("<br>" + months[mm]);
let d = today.getDay();
document.write("<br>");
document.write("<br>" + d);
document.write("<br>");

document.write("<br>" + days[d]);

document.write("<br>");

// time
let time = today.getTime();
document.write(time);
let hr = today.getHours();
document.write("<br>" + hr);
let min = today.getMinutes();
document.write("<br>" + min);
let sec = today.getSeconds();
document.write("<br>" + sec);

// creating timer
setInterval(() => {
  let today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let time_string = hr + ":" + min + ":" + sec;
  document.getElementById("timer").innerHTML = time_string;
}, 1000);
